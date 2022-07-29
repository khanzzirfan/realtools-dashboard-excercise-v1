import React from 'react';
import Text, { TextLight } from 'components/Text';
import { useHistory } from 'react-router';
import Button from 'components/Button';
import { Table, TableThCell, TableCell, TableRow } from 'components/Table';
import { Card, CardBody } from 'components/Card';
import SearchField from 'components/SearchField';
import CheckBoxField from 'components/Form/Checkbox';
import { EmploymentGroup } from 'components/EmploymentFilter';
import LoadingLogo from 'components/LoadingLogo';
import useDebounce from 'hooks/useDebounce';
import captalize from 'lodash/capitalize';
import CurrencyText from 'components/Currency';
import LinkButton from 'components/LinkButton/LinkButton';
import AppContext from 'hooks/useAppContext';
import usePeople from 'hooks/usePeople';
import {
  Container,
  Grid,
  StyledIconUser,
  StyledTableWrapper,
  StyledActionPanel,
  LoaderContainer,
} from './Styles';

export default function People() {
  const { filters, setFilters } = React.useContext(AppContext);
  const debounceQuery = useDebounce(filters, 600);
  const { status, data } = usePeople(debounceQuery);
  const history = useHistory();

  /**
   * handle search change
   * @param {Any} event
   */
  const handleOnSearchChange = (event) => {
    const {
      target: { value },
    } = event;
    const searchValue = value && value.length > 0 ? value : value?.trim();
    setFilters({ ...filters, searchText: searchValue });
  };

  /**
   * handle on filter type change
   * @param {Any} event
   */
  const handleOnFilterChange = (event) => {
    const {
      target: { checked, name },
    } = event;
    setFilters({ ...filters, [name]: !!checked });
  };

  /**
   * handle on Add buttton click
   * perform navigation to add new member
   */
  const handleOnAddClick = () => {
    history.push('/people/new');
  };

  const statusText = data && (data.length === 1 ? '1 employee' : `${data.length} employees`);
  return (
    <Container>
      <Grid>
        <Text
          as="h2"
          size="h2"
          data-testid="title"
          tabIndex={0}
          aria-live="polite"
          aria-atomic="true"
          id="peopleinfo"
        >
          People
          {data && data.length > 0 && (
            <TextLight ml={8} size="bodyCaption" aria-label={`${statusText} found`}>
              {statusText}
            </TextLight>
          )}
        </Text>
        <Button onClick={handleOnAddClick} data-testid="addmember">
          <StyledIconUser /> Add member
        </Button>
      </Grid>
      <StyledTableWrapper>
        <Card>
          <CardBody>
            <StyledActionPanel>
              <SearchField
                value={filters.searchText}
                onChange={handleOnSearchChange}
                placeholder="Search by name"
              />
              <EmploymentGroup role="group" aria-label="employment filter">
                <CheckBoxField
                  label="Contractor"
                  name="contractor"
                  checked={!!filters.contractor}
                  onChange={handleOnFilterChange}
                />
                <CheckBoxField
                  label="Employee"
                  name="employee"
                  checked={!!filters.employee}
                  onChange={handleOnFilterChange}
                />
              </EmploymentGroup>
            </StyledActionPanel>
            <Table aria-controls="peopleinfo">
              <thead>
                <tr>
                  <TableThCell>Name</TableThCell>
                  <TableThCell>Role</TableThCell>
                  <TableThCell>Type</TableThCell>
                  <TableThCell>Country</TableThCell>
                  <TableThCell align="right">Salary</TableThCell>
                  <TableThCell>
                    <span />
                  </TableThCell>
                </tr>
              </thead>
              <tbody data-testid="tbody">
                {status === 'loading' && (
                  <TableRow>
                    <TableCell colSpan="6">
                      <LoaderContainer>
                        <LoadingLogo />
                      </LoaderContainer>
                    </TableCell>
                  </TableRow>
                )}
                {status === 'success' && (
                  <React.Fragment>
                    {data &&
                      data.map((people) => {
                        return (
                          <TableRow key={people.id} data-testid={`row-${people.id}`}>
                            <TableCell width="20%">
                              <Text size="bodySmallMedium" color="dark">
                                {people.name}
                              </Text>
                            </TableCell>
                            <TableCell>{people.jobTitle}</TableCell>
                            <TableCell>{captalize(people.employment)}</TableCell>
                            <TableCell>{people.country}</TableCell>
                            <TableCell align="right">
                              <CurrencyText currency={people.currency} value={people.salary} />
                            </TableCell>
                            <TableCell align="right" width="10%">
                              <LinkButton
                                to={`/people/edit/${people.id}`}
                                aria-label={`Edit link for ${people.name}`}
                              >
                                Edit
                              </LinkButton>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </React.Fragment>
                )}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </StyledTableWrapper>
    </Container>
  );
}
