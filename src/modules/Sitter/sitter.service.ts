import { BookingStatus } from "../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

const createSitter = async (
    payload: {
        bio: string;
        experience: number;
        hourlyRate: number;
    },
    userId: string,
) => {
    console.log('create sitter service...');

    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });

    if(!user) {
        throw new Error("User not found");
    }

    const result = await prisma.sitterProfile.create({
        data:{
            ...payload,sitterId: userId
        }
    })
    return result;
};

const getAllSitter = async()=>{
    const result = await prisma.sitterProfile.findMany();
    return result;
}

const getSingleSitter = async(userId:string) =>{

    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        }
    })

    if(!user) {
        throw new Error("User does not found with the given id.");
    }

    const result = await prisma.sitterProfile.findUnique({
        where: {
            sitterId: userId
        },
        include: {
            user: true,
        }
    });

    return result;

}

const updateBookingStatus = async(status: BookingStatus, bookingId: string)=>{

    const result = await prisma.booking.update({
        where: {
            id: bookingId,
        },
        data:{
            status: status
        }
    });
    return result;  
}

export const SitterService = {
    createSitter,
    getAllSitter,
    getSingleSitter,
    updateBookingStatus,
};
