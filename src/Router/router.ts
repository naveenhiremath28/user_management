import express, {  Request, Response } from "express";
import { addUser, validateUser, fun2 } from "../Users/UserOperations";
import { validate, fun1 } from "../Functionalities/functionalities";

export const router = express.Router();
router.post("/setUser", validate, validateUser, addUser);
