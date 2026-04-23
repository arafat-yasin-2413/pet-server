import { Request, Response } from "express";
import { PetService } from "./pet.service";

const createPet = async(req: Request, res: Response) => {
    try {
        console.log("create pet controller req.user : ...", req.user);
    
        const result = await PetService.createPet(req.body, req.user?.id);
        
        return res.status(200).json({
            success: true,
            message: "Pet created successfully",
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

const getAllPets = async(req: Request, res: Response) => {
    try {    
        const result = await PetService.getAllPets();
        
        return res.status(200).json({
            success: true,
            message: "Get All Pets Successful.",
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

const getMyPets = async(req: Request, res: Response) => {
    try {    
        const userId = req.user?.id;
        const result = await PetService.getMyPets(userId);
        
        return res.status(200).json({
            success: true,
            message: "Get My Pets Successful.",
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

const getSinglePet = async(req:Request, res:Response) =>{
try {    
        const petId = req.params.id;
        const result = await PetService.getSinglePet(petId as string);
        
        return res.status(200).json({
            success: true,
            message: "Get Pet Details Successful.",
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

export const PetController = {
    createPet,
    getAllPets,
    getMyPets,
    getSinglePet,
};
