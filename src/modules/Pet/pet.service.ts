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

const getAllPets = async()=>{
    const result = await prisma.pet.findMany();
    return result;
}

const getMyPets = async(userId:string)=>{
    console.log('get my pets service : ', userId);

    const result = await prisma.pet.findMany({
        where: {
            ownerId : userId
        }
    })

    // console.log('Printing result : ', result) // []

    return result;
}

const getSinglePet = async(id:string) =>{
    console.log('get single pet : ', id);

    const result = await prisma.pet.findUnique({
        where: {
            id
        }
    })
    return result;
}

export const PetService = {
    createPet,
    getAllPets,
    getMyPets,
    getSinglePet,
};
