import { rest } from 'msw';
import peoplesdb from './__fixtures__/peoples.json';

export const handlers = [
  rest.get('http://localhost:4002/people', (req, res, ctx) => {
    const name_like = req.url.searchParams.get('name_like');
    const employment = req.url.searchParams.get('employment');

    if (name_like) {
      const nameLikeData = peoplesdb.filter((f) => f.name.includes(name_like));
      return res(ctx.json(nameLikeData));
    }

    if (employment) {
      const contractorData = peoplesdb.filter((f) => f.employment === employment);
      return res(ctx.json(contractorData));
    }
    const result = peoplesdb;
    return res(ctx.json(result));
  }),
];

/**
 * http://localhost:4002/people'
 */
