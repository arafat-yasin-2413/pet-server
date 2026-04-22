import bcrypt from "bcryptjs";
import { UserRole } from "../middlewares/auth";
import { prisma } from "../lib/prisma";

const seedAdmin = async () => {
    const hashedPassword = await bcrypt.hash("admin1234", 10);

    const adminData = {
        name: "Admin",
        email: "admin@gmail.com",
        role: UserRole.ADMIN,
        password: hashedPassword,
    };

    try {
        const isExists = await prisma.user.findUnique({
            where: {
                email: adminData.email,
            },
        });

        if (isExists) {
            console.log("Admin already exists. Please Login.");
            return;
        }

        const newAdmin = await prisma.user.create({
            data: adminData,
        });
        console.log("Admin created Successfully!");
    } catch (error: any) {
        console.error(error);
    }
};


seedAdmin();