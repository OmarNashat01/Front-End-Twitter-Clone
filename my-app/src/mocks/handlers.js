import { rest } from "msw";

//BASE URL
const BASE_URL = "http://localhost:3030";

//this is like the database
const coins = {
  ADA: { name: "Cardano", website: "https://cardano.org/" },
  DOT: { name: "polkadot", website: "https://polkadot.network" },
};
//////////////////////////////////////////////////////////////

const USER_50CENT = {
  _id: "50CENT_1234",
  email: "email@email.com",
  name: "50 Cent",
  username: "@iam50c",
  date_of_birth: "1998-02-25",
  gender: "M",
  creation_date: "2005-12-01",
  bio: "producer/influencer and I like ice cream 🍧🍧",
  location: "The Bronx, New York",
  website: "dummywebsite.com",
  admin: false,
  followers: [
    {
      name: "DrDre",
      username: "@dedre",
      prof_pic_url:
        "https://pbs.twimg.com/profile_images/1598289026/Dr.-Dre-Detox-Approved-Photo-for-twitter_400x400.jpg",
      bio: "i am still dre",
      followers_count: 455,
      following_count: 127,
    },
    {
      name: "Snoop Dogg",
      username: "@SNOOP",
      prof_pic_url:
        "https://pbs.twimg.com/profile_images/1505032322717941761/EaFzE2yN_400x400.jpg",
      bio: "Ayo! i am still here",
      followers_count: 450,
      following_count: 128,
    },
  ],
  following: [
    {
      name: "DrDre",
      username: "@dedre",
      prof_pic_url:
        "https://pbs.twimg.com/profile_images/1598289026/Dr.-Dre-Detox-Approved-Photo-for-twitter_400x400.jpg",
      bio: "i am still dre",
      followers_count: 2,
      following_count: 0,
    },
    {
      name: "Snoop Dogg",
      username: "@SNOOP",
      prof_pic_url:
        "https://pbs.twimg.com/profile_images/1505032322717941761/EaFzE2yN_400x400.jpg",
      bio: "Ayo! i am still here",
      followers_count: 450,
      following_count: 128,
    },
  ],
  followers_count: 2,
  following_count: 3,
  tweet_count: 3,
  prof_pic_url:
    "https://pbs.twimg.com/profile_images/1226895461941940224/hBx6tZxz_400x400.jpg",
  cover_pic_url:
    "https://pbs.twimg.com/profile_banners/18222378/1645118556/1500x500",
};

//////////////////////////////////////////////////////

const USER_DRDRE = {
  _id: "DRDRE_1234",
  email: "example@example.com",
  name: "DrDre",
  username: "@dedre",
  date_of_birth: "1994-05-30",
  gender: "M",
  creation_date: "2005-12-01",
  bio: "i am still dre",
  location: "Manhattan",
  website: "examplewebsite.com",
  admin: false,

  followers: [
    {
      name: "Snoop Dogg",
      username: "@SNOOP",
      prof_pic_url:
        "https://pbs.twimg.com/profile_images/1505032322717941761/EaFzE2yN_400x400.jpg",
      bio: "Ayo! i am still here",
      followers_count: 450,
      following_count: 128,
    },
    {
      name: "50 Cent",
      username: "@iam50c",
      prof_pic_url:
        "https://pbs.twimg.com/profile_images/1226895461941940224/hBx6tZxz_400x400.jpg",
      bio: "producer/influencer and I like ice cream 🍧🍧",
      followers_count: 2,
      following_count: 3,
    },
  ],

  following: [],

  followers_count: 2,
  following_count: 0,
  tweet_count: 1,
  prof_pic_url:
    "https://pbs.twimg.com/profile_images/1598289026/Dr.-Dre-Detox-Approved-Photo-for-twitter_400x400.jpg",
  cover_pic_url:
    "https://pbs.twimg.com/profile_banners/28209292/1438720434/1500x500",
};

//////////////////////////////////////////////////////

const USER_EMINEM = {
  _id: "EMINEM_1234",
  email: "dummy@email.com",
  name: "Eminem",
  username: "@MnM",
  date_of_birth: "1998-02-25",
  gender: "M",
  creation_date: "2005-12-01",
  bio: "New album coming soon ✨✨",
  location: "outer space",
  website: "dummywebsite.com",
  admin: false,
  followers: [],
  following: [],

  followers_count: 0,
  following_count: 0,
  tweet_count: 1,
  prof_pic_url:
    "https://pbs.twimg.com/profile_images/1477000326213509125/Bx2Gkyjx_400x400.jpg",
  cover_pic_url:
    "https://pbs.twimg.com/profile_banners/22940219/1608271811/1500x500",
};

const USERS = {
  users: [USER_50CENT, USER_DRDRE, USER_EMINEM],
};

/////////////////////////////////////////////////////

const ADMIN_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MjY1NTIyNzRkNTc4NmY0MzdjYmIyNWMiLCJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjgyMzQzOTExfQ.b6-oq0j_Uto5NGvyobu4y2BVRjmM_6cUT9zQJ1I9FP8";
const USER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MjY1NTFmNDRkNTc4NmY0MzdjYmIyNWIiLCJhZG1pbiI6ZmFsc2UsImV4cCI6MTY4MjM0MzQ5MX0.8xbJXtfITqlxM1YwdaRV1kr1qXRtvQJ3glhjxNdOPD4";

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
          message: "user found",
          token: USER_TOKEN,
          admin: false,
          _id: "50CENT_1234",
        })
      );
    }

    if (password === "admin" && email === "admin@email.com") {
      return res(
        ctx.status(200),
        ctx.json({
          message: "user found",
          token: ADMIN_TOKEN,
          admin: false,
          _id: "ADMIN_1234",
        })
      );
    }

    if (email !== "email@email.com" && email !== "admin@email.com") {
      return res(ctx.status(404).ctx.json({ message: "email doesn't exist" }));
    }

    if (email === "email@email.com" || password !== "5678") {
      return res(ctx.status(400), ctx.json({ message: "incorrect password" }));
    }

    if (email === "admin@email.com" || password !== "admin") {
      return res(ctx.status(400), ctx.json({ message: "incorrect password" }));
    }
  }),

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  ///////////////////////***PROFILE ROUTES***//////////////////////////

  //GET users/me ===> to get the info of the current user
  rest.get(`${BASE_URL}/users/me`, (req, res, ctx) => {
    const TOKEN = req.headers._headers["x-access-token"];

    if (TOKEN === undefined || TOKEN === null) {
      return res(
        ctx.status(404),
        ctx.delay(500),
        ctx.json({ 404: "TOKEN IS MISSING" })
      );
    }

    return res(ctx.status(200), ctx.delay(500), ctx.json(USER_50CENT));
  }),

  //GET users/user_id ===> to get the info of the user with the provided id
  rest.get(`${BASE_URL}/users/user_id`, (req, res, ctx) => {
    const TOKEN = req.headers._headers["x-access-token"];
    const USER_ID = req.url.searchParams.get("user_id");

    if (TOKEN === undefined || TOKEN === null) {
      return res(
        ctx.status(404),
        ctx.delay(500),
        ctx.json({ 404: "TOKEN IS MISSING" })
      );
    } else if (USER_ID === "DRDRE_1234") {
      return res(ctx.status(200), ctx.delay(500), ctx.json(USER_DRDRE));
    }
  }),

  // POST /users/following ==> current user follows the user with the provided id

  rest.post(`${BASE_URL}/users/following`, (req, res, ctx) => {
    const TOKEN = req.headers._headers["x-access-token"];
    const { source_user_id, target_user_id } = req.body;

    if (TOKEN === undefined || TOKEN === null) {
      return res(
        ctx.status(404),
        ctx.delay(500),
        ctx.json({ 404: "TOKEN IS MISSING" })
      );
    }

    if (source_user_id === "50CENT_1234" && target_user_id === "EMINEM_1234") {
      return res(ctx.status(200), ctx.delay(500));
    } else if (source_user_id !== USER_50CENT) {
      return res(
        ctx.status(404),
        ctx.delay(500),
        ctx.json({ 404: "source user is wrong" })
      );
    } else {
      return res(
        ctx.status(404),
        ctx.delay(500),
        ctx.json({ 404: "target user is wrong" })
      );
    }
  }),

  rest.delete(`${BASE_URL}/users/following`, (req, res, ctx) => {
    const TOKEN = req.headers._headers["x-access-token"];
    const source_user_id = req.url.searchParams.get("source_user_id");
    const target_user_id = req.url.searchParams.get("target_user_id");

    if (TOKEN === undefined || TOKEN === null) {
      return res(
        ctx.status(404),
        ctx.delay(500),
        ctx.json({ 404: "TOKEN IS MISSING" })
      );
    }
    if (target_user_id !== "EMINEM_1234") {
      return res(ctx.status(404), ctx.delay(500));
    } else if (target_user_id === "EMINEM_1234") {
      return res(ctx.status(200), ctx.delay(500));
    }
  }),

  // TODO: PUT /users/update_profile

  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////Admin Routes////////////////////////

  // GET /users/all ==>gets all the users
  rest.get(`${BASE_URL}/users/all`, (req, res, ctx) => {
    const offset = req.url.searchParams.get("offset");
    const limit = req.url.searchParams.get("limit");
    const TOKEN = req.headers._headers["x-access-token"];

    if (TOKEN === undefined || TOKEN === null) {
      return res(
        ctx.status(401),
        ctx.delay(500),
        ctx.json({ message: "Token invalid or Token is missing" })
      );
    }

    if (TOKEN !== ADMIN_TOKEN) {
      return res(
        ctx.status(403),
        ctx.delay(500),
        ctx.json({ message: "user is not admin" })
      );
    }

    return res(ctx.status(200), ctx.delay(500), ctx.json(USERS));
  }),
];
