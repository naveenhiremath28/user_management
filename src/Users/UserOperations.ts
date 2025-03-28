import { validate } from "../Functionalities/functionalities";
import { NextFunction, Request, response, Response } from "express";
import { readFile,writeFile } from "fs";
import _ from "lodash";
import {  ExistingUserError } from "../Exceptions/ValidationError";

export const addUser = async (req: Request, res: Response) => {
    const body = JSON.parse(JSON.stringify(req.body));
        var path = "/home/sanketikac340/Documents/Practice/user_management/users_info.json";
        try{
            readFile(path, "utf8", (error, data) => {
                var list: any = [];
                error && console.log(error);
                if ((data.toString()).trim() !== "") {
                    try {
                        list = JSON.parse(data);
                    } catch (parseError) {
                        console.log("Error parsing JSON:", parseError);
                        return;
                    }
                }
                list.push(body);

                writeFile(path, JSON.stringify(list, null, 2), (writeError) => {
                    writeError && console.log(writeError);
                    return
                  });
        });
        res.send("succeesssss");
        }
        catch (error) {
            console.log(error);
        }
}

export const validateUser = async (req: Request, res: Response, next: NextFunction) => {
    var path = "/home/sanketikac340/Documents/Practice/user_management/users_info.json";
    try{
    readFile(path, (error, data) => {
        error && console.log(error);
        const list = JSON.parse(data.toString());
        const isValidUser = _.find(list, _.matchesProperty("id",req.body?.id || -1)) 
        if(isValidUser) {
            throw new ExistingUserError("User Already Exists..!");
        }
        next();
        })
    }
    catch (error) {
        res.status(400).json({ error: "User validation failed" });
    }

}

export const fun2 = async (next: NextFunction) => {
    next();
}