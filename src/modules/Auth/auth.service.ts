import bcrypt from "bcryptjs";
import { Role } from "../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import jwt from "jsonwebtoken";
import config from "../../config";

const createUser = async (payload: {
    name: string;
    email: string;
    password: string;
    role: Role;
}) => {
    // console.log('create user service')

    const existingUser = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });

    if (existingUser) {
        // const error: any = new Error("User already exists!. Please Login.");
        // error.statusCode = 409 // conflict
        // throw error;

        throw new Error(
            "Apnar already account ache. abar keno register korte aschen?",
        );
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const result = await prisma.user.create({
        data: { ...payload, password: hashedPassword },
    });
    const { password, ...remainingResult } = result;
    return remainingResult;
};

const userLogin = async (payload: { email: string; password: string }) => {
    // console.log("user login service", payload);

    const isUserExist = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });

    if (!isUserExist) {
        throw new Error(
            "User not found in the database. Re-check your credentials.",
        );
        // const error: any = new Error("Ei user database a nai.");
        // error.statusCode = 500;
        // throw error;
    }

    const isPasswordMatched = await bcrypt.compare(payload.password, isUserExist.password);

    if(!isPasswordMatched) {
        throw new Error("Invalid password. Please provide the correct password.");
    }

    const userDataInsideToken = {
        id: isUserExist.id,
        name: isUserExist.name,
        email: isUserExist.email,
        role: isUserExist.role,
        status: isUserExist.status,
    };
    const token = jwt.sign(userDataInsideToken, config.jwtSecret, {
        expiresIn: "1d",
    });

    const {password, ...remainingUserData} = isUserExist;

    return{
        token,
        userData: remainingUserData,
    };
};

const getAllUser = async()=>{
    return await prisma.user.findMany();
}

export const AuthService = {
    createUser,
    userLogin,
    getAllUser,
};
