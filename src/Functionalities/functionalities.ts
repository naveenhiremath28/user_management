
import { readFile, writeFile } from "fs";
import Ajv from "ajv";
import _ from "lodash";
import { Users } from "../Users/users";
import { NextFunction } from "express";
import { ValidationError } from "../Exceptions/ValidationError";
import { Request, Response } from "express";


const ajv =new Ajv();

export const validate  = async (request: Request, response: Response, next: NextFunction ) =>{
    const isValidate = ajv.validate(Users, request.body);
    if (!isValidate){
        throw new ValidationError("Schema Validation Failed");
    }
    next()
}


export const fun1 = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    next();
}