import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    sessionStorage.setItem("login", "true");
    return res(
      ctx.status(200),
      ctx.json({
        errorMessage: "success login",
      })
    );
  }),
  rest.post("/logout", (req, res, ctx) => {
    sessionStorage.setItem("login", "false");
    return res(
      ctx.status(200),
      ctx.json({
        errorMessage: "success logout",
      })
    );
  }),
];
