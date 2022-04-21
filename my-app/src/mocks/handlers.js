import { rest } from "msw";

//Base URL
const BASE_URL = "http://localhost:3030";

//this is like the database
const coins = {
  ADA: { name: "Cardano", website: "https://cardano.org/" },
  DOT: { name: "polkadot", website: "https://polkadot.network" },
};

//each element is an element to mock
export const handlers = [
  //get coins request
  rest.get(`${BASE_URL}/example/route`, (req, res, ctx) => {
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

  //Verify Route ======> to send verification mail
  rest.post(`${BASE_URL}/signup/verify`, (req, res, ctx) => {
    const { email } = req.body;

    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({
        "OTP Sent": true,
        OTP: "1312",
      })
    );
  }),
];
