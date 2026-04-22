import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { prisma } from "../lib/prisma";

export enum UserRole {
    OWNER = "OWNER",
    SITTER = "SITTER",
    ADMIN = "ADMIN",
}



const auth = (...roles: UserRole[]) =>{
    // console.log(roles);
    return async(req:Request, res:Response, next:NextFunction)=>{
        try{
            // check token existence
            const token = req.headers.authorization
            if(!token) {
                throw new Error("Token not found!");
            }
            // decode the token
            const decoded = jwt.verify(token, config.jwtSecret) as JwtPayload
            // console.log('Decoded Data: ', decoded);

            // is user exist in the system
            const userData = await prisma.user.findUnique({
                where: {
                    email: decoded.email,
                }
            });

            if(!userData) {
                throw new Error("User doesn't exist in the system. USER NOT EXISTS!");
            }

            if(userData.status !== "ACTIVE") {
                throw new Error("This user account is Not Active!");
            }

            // check role
            if(roles.length && !roles.includes(decoded.role)) {
                throw new Error("You are Unauthorized!")
            }

            req.user = decoded;
            





            next();
        }
        catch(error:any) {
            console.error(error);
            next(error);
        }
        
        
    }
}


export default auth;