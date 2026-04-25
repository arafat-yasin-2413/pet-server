import { Booking } from "../../generated/prisma/client";
import { BookingStatus, ServiceType } from "../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

const createBooking = async (
    payload: Omit<Booking, "id" | "createdAt" | "updatedAt">,
    userId: string,
) => {
    /*
        1. user exist
        2. user is owner
        3. pet belongs to that owner
        4. service exists
        5. sitter exists
        6. calculate total price
        7. create booking

    */

    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });

    if (!user) {
        throw new Error("User not found.");
    }

    const pet = await prisma.pet.findUnique({
        where: {
            id: payload.petId,
        },
    });

    if (!pet) {
        throw new Error("Pet not found.");
    }

    if (pet.ownerId !== userId) {
        throw new Error("This pet not belongs to you.");
    }

    const isServiceExist = await prisma.service.findUnique({
        where: {
            id: payload.serviceId,
        },
    });

    if (!isServiceExist) {
        throw new Error("This service is not exist");
    }
    // TODO: is sitter exist?

    // calculation
    const startTime = new Date(payload.startDate).getTime(); // mili seconds
    const endTime = new Date(payload.endDate).getTime(); // mili seconds

    if (endTime <= startTime) {
        throw new Error("End data must be greater that start date.");
    }

    const duration = endTime - startTime;
    console.log("duration in mili seconds : ", duration);

    const durationInHour = duration / (1000 * 60 * 60);
    const totalPrice = durationInHour * isServiceExist.price;

    const result = await prisma.booking.create({
        data: {
            ...payload,
            totalPrice,
        },
    });

    return result;
};


const getAllBookings = async() =>{
    return await prisma.booking.findMany();
}



export const bookingService = {
    createBooking,
    getAllBookings,
};
