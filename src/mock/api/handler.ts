import { rest } from 'msw';

export const handlers = [
  rest.post(
    'https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel',
    (req, res, ctx) => {
      const mockResponse = [
        { id: 1, name: 'Xabi Alonzo' },
        { id: 2, name: 'Lionel Messi' },
        { id: 3, name: 'Lionel Love' },
        { id: 4, name: 'Lionel Poe' },
        { id: 5, name: 'Lionel Gink' },
      ];
      return res(ctx.status(200), ctx.json(mockResponse), ctx.delay(30));
    }
  ),
];
