import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const createUser = async (req: Request, res: Response) => {
    try {
        // console.log(req.body);
        const result = await AuthService.createUser(req.body);
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: result,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "User creation failed",
            details: error,
        });
    }
};

export const AuthController = {
    createUser,
};
