import { ServiceType } from "../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

const createService = async (
    payload: {
        serviceType: ServiceType;
        price: number;
        description: string;
    },
    userId: string,
) => {
   
    const sitterProfile = await prisma.sitterProfile.findUnique({
        where: {
            sitterId: userId
        }
    })

    if(!sitterProfile) {
        throw new Error("Sitter Profile not found");
    }

    const result = await prisma.service.create({
        data:{
            ...payload,sitterId: sitterProfile.id
        }
    })  
    return result;
};

const getAllService = async()=>{
    const result = await prisma.sitterProfile.findMany();
    return result;
}

const getSingleService = async(userId:string) =>{

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

export const serviceService = {
    createService,
    getAllService,
    getSingleService,
};
