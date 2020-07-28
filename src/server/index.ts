import express from "express";
import path    from "path";

import router  from "./routes/router";

const app: express.Application = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.use("/assets", express.static(path.join(__dirname, "../assets")));

app.post("/echo", (req: express.Request, res: express.Response) => {
  res.send(req.body);
});

app.use((req: express.Request, res: express.Response) => {
  res.status(404).send(`${req.path} Not Found.`);
});

app.listen(3000, () => {
  console.log("server listening: 3000");
});
