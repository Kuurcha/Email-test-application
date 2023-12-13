import express, { Request, Application, Response } from "express";
import { UserInfoController } from "./controller/UserInfoController";

const app: Application = express();
const port: number = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.setHeader("Content-Type", "application/json");
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("This is Email Api, hi!");
});

const userInfoController = new UserInfoController();

app.get("/find-matching-records", userInfoController.findMatchingRecords);

app.listen(port, () => {
  console.log("Server is Fire at http://localhost:" + port);
});
