import { rest } from "msw";

//BASE URL
const BASE_URL = "http://localhost:3030";

//this is like the database
const coins = {
  ADA: { name: "Cardano", website: "https://cardano.org/" },
  DOT: { name: "polkadot", website: "https://polkadot.network" },
};
//////////////////////////////////////////////////////

// USER USED FOR SIGNUP EMAIL=email@email.com
//THE OTP=1234
//EMAIL FOR LOGIN= email@email.com
//password= "5678"
//user id= "user_1234"
//token= "TOKEN"

//each element is an element to mock
export const handlers = [
  //GET request example
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

  // POST request example
  rest.post(`${BASE_URL}/coins`, (req, res, ctx) => {
    const { coin } = req.body;

    if (coin !== "bitcoin") {
      return res(ctx.status(404), ctx.json({ success: false }));
    }

    return res(ctx.json({ success: true }));
  }),

  // GET request with query parameters
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
    const productId = req.url.searchParams.get("id");
    return res(
      ctx.json({
        productId,
      })
    );
  }),

  ////////////////////////////////////////////////////////////////////

  //VERIFY ====> Causes the user to verify his email by sending an OTP to him
  rest.post(`${BASE_URL}/signup/verify`, (req, res, ctx) => {
    const { email } = req.body;

    if (email === undefined) {
      return res(ctx.status(404), ctx.json({ error: "no email was given" }));
    }

    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json({ "OTP Sent": true, OTP: "1234" })
    );
  }),

  // CONFIRM EMAIL =====> Causes the user to verify his email by entering the correct OTP

  rest.get(`${BASE_URL}/signup/confirm_email`, (req, res, ctx) => {
    const OTP = req.url.searchParams.get("OTP");
    const email = req.url.searchParams.get("email");

    if (email === "email@email.com" && OTP === "1234") {
      return res(
        ctx.delay(500),
        ctx.status(200),
        ctx.json({ 200: "Email verified", email: "email@email.com" })
      );
    } else {
      return res(
        ctx.delay(500),
        ctx.status(401),
        ctx.json({ 401: "Token expired" })
      );
    }
  }),

  // SIGNUP =====> Causes the user to create a new account

  rest.post(`${BASE_URL}/signup`, (req, res, ctx) => {
    const { email, password, name, date_of_birth, gender, username } = req.body;

    if (username === "mark") {
      return res(ctx.status(400));
    }

    return res(ctx.status(200));
  }),

  //LOGIN ====> takes email and password and logs in the user

  rest.post(`${BASE_URL}/Login`, (req, res, ctx) => {
    const { email, password } = req.body;

    if (password === "5678" && email === "email@email.com") {
      return res(
        ctx.status(200),
        ctx.json({
          "User found": true,
          token: "TOKEN",
          user_id: "user_1234",
        })
      );
    }

    if (email !== "email@email.com") {
      return res(ctx.status(401).ctx.json({ 400: "Password doesn't match" }));
    }

    if (email !== "email@email.com" || password !== "5678") {
      return res(ctx.status(401), ctx.json({ 400: "Password doesn't match" }));
    }
  }),
];
