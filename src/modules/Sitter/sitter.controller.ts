import { Request, Response } from "express";
import { SitterService } from "./sitter.service";

const createSitter = async(req: Request, res: Response) => {
    try {
        console.log("create sitter controller req.user : ...", req.user);
    
        const result = await SitterService.createSitter(req.body, req.user?.id);
        
        return res.status(200).json({
            success: true,
            message: "Sitter created successfully",
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

const getAllSitter = async(req: Request, res: Response) => {
    try {    
        const result = await SitterService.getAllSitter();
        
        return res.status(200).json({
            success: true,
            message: "Getting all sitter successfull.",
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

const getSingleSitter = async(req:Request, res:Response) =>{
try {    
        const result = await SitterService.getSingleSitter(req.user?.id);
        
        return res.status(200).json({
            success: true,
            message: "Getting sitter profile Successful.",
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
}

const updateBookingStatus = async(req: Request, res: Response) => {
    try {    
        const result = await SitterService.updateBookingStatus(req.body.status, req.params?.id as string);
        
        return res.status(200).json({
            success: true,
            message: "Updating booking status is successfull.",
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

export const SitterController = {
    createSitter,
    getAllSitter,
    getSingleSitter,
    updateBookingStatus,
};
