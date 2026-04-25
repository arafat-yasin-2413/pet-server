import { Request, Response } from "express";
import { serviceService } from "./service.service";

const createService = async(req: Request, res: Response) => {
    try {
        console.log("create sitter controller req.user : ...", req.user);
    
        const result = await serviceService.createService(req.body, req.user?.id);
        
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

const getMyServices = async(req: Request, res: Response) => {
    try {    
        const result = await serviceService.getMyServices(req.user?.id);
        
        return res.status(200).json({
            success: true,
            message: "Getting my services successfull.",
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

const getSingleService = async(req:Request, res:Response) =>{
try {    
        const result = await serviceService.getSingleService(req.user?.id);
        
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

const getAllServices = async(req:Request, res:Response) =>{
try {    
        const result = await serviceService.getAllServices();
        
        return res.status(200).json({
            success: true,
            message: "Getting service Successful.",
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

export const serviceController = {
    createService,
    getMyServices,
    getAllServices,
    getSingleService,
};
