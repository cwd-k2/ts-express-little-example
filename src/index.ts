import express from "express";
import router  from "./routes/router";

const app: express.Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.post("/echo", (req: express.Request, res: express.Response) => {
  res.send(req.body);
});

app.use((req: express.Request, res: express.Response) => {
  res.status(404).send(`${req.path} Not Found.`);
});

app.listen(3000, () => {
  console.log("server listening: 3000");
});
