import { useQuery } from 'react-query';
import { get } from 'services';

const getPeoples = async ({ searchText, contractor, employee }) => {
  let peopleUrl = '/people';
  if (searchText) {
    peopleUrl += `?name_like=${searchText}`;
  }

  // filter by specific employment type
  if (contractor && !employee) {
    peopleUrl += `${searchText ? '&' : '?'}employment=contractor`;
  } else if (!contractor && employee) {
    peopleUrl += `${searchText ? '&' : '?'}employment=employee`;
  }
  const { data } = await get(peopleUrl);
  return data;
};

export default function usePeople(queryParams) {
  return useQuery(['peoples', [queryParams]], () => getPeoples(queryParams));
}
