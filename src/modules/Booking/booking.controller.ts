import { Request, Response } from "express";
import { bookingService } from "./booking.service";

const createBooking = async(req: Request, res: Response) => {
    try {    
        const result = await bookingService.createBooking(req.body, req.user?.id);
        
        return res.status(200).json({
            success: true,
            message: "Booking created successfully",
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


const getAllBookings = async(req: Request, res: Response) => {
    try {    
        const result = await bookingService.getAllBookings();
        
        return res.status(200).json({
            success: true,
            message: "Getting all bookings successfull.",
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




export const bookingController = {
    createBooking,
    getAllBookings,
};
