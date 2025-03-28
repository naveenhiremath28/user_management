import express, { Express, Request, Response } from "express";
import { router } from "./Router/router";

const app: Express = express();

app.use(express.json());
app.use("/v1/", router);

app.listen(2000, () => {
    console.log("\nServer is running on port 2000");
});
