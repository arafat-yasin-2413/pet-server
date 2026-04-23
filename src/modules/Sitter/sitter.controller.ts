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

// const getAllSitter = async(req: Request, res: Response) => {
//     try {    
//         const result = await PetService.getAllPets();
        
//         return res.status(200).json({
//             success: true,
//             message: "Get All Pets Successful.",
//             data: result,
//         });
//     } catch (error: any) {
//         // return res.status(error.statusCode||400).json({
//         //     success: false,
//         //     message: error.message || "User login failed",

//         // });
//         return res.status(400).json({
//             success: false,
//             message: error.message,
//         });
//     }
// };

// const getSingleSitter = async(req:Request, res:Response) =>{
// try {    
//         const petId = req.params.id;
//         const result = await PetService.getSinglePet(petId as string);
        
//         return res.status(200).json({
//             success: true,
//             message: "Get Pet Details Successful.",
//             data: result,
//         });
//     } catch (error: any) {
//         // return res.status(error.statusCode||400).json({
//         //     success: false,
//         //     message: error.message || "User login failed",

//         // });
//         return res.status(400).json({
//             success: false,
//             message: error.message,
//         });
//     }    
// }

export const SitterController = {
    createSitter,
    
};
