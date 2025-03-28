import { Response } from "express";

export class ValidationError extends Error {
    constructor(message: any) {
        super(message);
        this.name = "ValidationError";
    }
}


export class ExistingUserError extends Error {
    constructor(message: any) {
        super(message);
        this.name = "ExistingUserError";
    }
}
