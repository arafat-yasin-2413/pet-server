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
    const result = await prisma.pet.findMany();
    return result;
}

const getSingleSitter = async(id:string) =>{
    console.log('get single pet : ', id);

    const result = await prisma.pet.findUnique({
        where: {
            id
        }
    })
    return result;
}

export const SitterService = {
    createSitter,
    getAllSitter,
    getSingleSitter,
};
