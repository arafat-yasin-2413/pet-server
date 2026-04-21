import bcrypt from "bcryptjs";
import { Role } from "../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

const createUser = async (payload: {
    name: string;
    email: string;
    password: string;
    role: Role;
}) => {
    // console.log('create user service')

    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const result = await prisma.user.create({
        data: { ...payload, password: hashedPassword },
    });
    const {password, ...remainingResult} = result;
    return remainingResult;
};

export const AuthService = {
    createUser,
};
