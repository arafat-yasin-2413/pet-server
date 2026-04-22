import { prisma } from "../../lib/prisma";

const createPet = async (
    payload: {
        name: string;
        breed: string;
        age: string;
        notes: string;
    },
    userId: string,
) => {
    // console.log("create pet service...", payload, userId);
    const petCode = `${payload.name}-${payload.breed}-${Date.now()}`;
    console.log("PetCode------- ,", petCode);

    
    const result = await prisma.pet.create({
        data: { ...payload, ownerId: userId, petCode },
    });
    return result;
};

export const PetService = {
    createPet,
};
