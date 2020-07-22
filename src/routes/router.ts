import express from "express";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send("<h1>Hello, World!</h1><p>This is Express / TypeScript / Node.js!</p>");
});

export default router;
