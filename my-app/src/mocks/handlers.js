import { rest } from "msw";

//BASE URL
const BASE_URL = "http://localhost:3030";

//this is like the database
const coins = {
  ADA: { name: "Cardano", website: "https://cardano.org/" },
  DOT: { name: "polkadot", website: "https://polkadot.network" },
};

//each element is an element to mock
export const handlers = [
  //get coins request
  rest.get(`${BASE_URL}/coins`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json(
        Object.entries(coins).map(([symbol, data]) => {
          return { symbol, ...data };
        })
      )
    );
  }),

  rest.post(`${BASE_URL}/coins`, (req, res, ctx) => {
    const { coin } = req.body;

    if (coin !== "bitcoin") {
      return res(ctx.status(404), ctx.json({ success: false }));
    }

    return res(ctx.json({ success: true }));
  }),
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
    const productId = req.url.searchParams.get("id");
    return res(
      ctx.json({
        productId,
      })
    );
  }),
];
