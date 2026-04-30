import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";
import { success } from "zod";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // console.log(req.body);
        const result = await AuthService.createUser(req.body);
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: result,
        });
    } catch (error: any) {
        next(error);
    }
};

const userLogin = async (req: Request, res: Response) => {
    try {
        // console.log(req.body);
        const result = await AuthService.userLogin(req.body);

        res.cookie("token", result.token, {
            secure: false,
            httpOnly: true,
            sameSite: "strict", // none / lax
        });

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: result,
        });
    } catch (error: any) {
        // return res.status(error.statusCode||400).json({
        //     success: false,
        //     message: error.message || "User login failed",

        // });
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


const getAllUser = async (req: Request, res: Response) => {
    try {
        // console.log(req.body);
        const result = await AuthService.getAllUser();

        return res.status(200).json({
            success: true,
            message: "All user retrived successfully.",
            data: result,
        });
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const AuthController = {
    createUser,
    userLogin,
    getAllUser,
};
