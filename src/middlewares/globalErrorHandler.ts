import { NextFunction, Request, Response } from "express";
import { Prisma } from "../generated/prisma/client";

export function errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    // console.log(err);

    let statusCode = 500;
    let errorMessage = "Internal Server Error!";
    let errorDetails = err;

    if (err instanceof Prisma.PrismaClientValidationError) {
        statusCode = 400,
        errorMessage = "Incorrect body or missing field(s)"
    }

    res.status(statusCode);
    res.json({ success: false, message: errorMessage, error: errorDetails });
}
