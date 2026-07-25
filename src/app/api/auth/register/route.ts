import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, password, adminKey } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    // Check if any admin exists
    const adminCount = await prisma.adminUser.count();
    
    // If admins already exist, this user becomes an employee instead of throwing an error
    const role = adminCount > 0 ? "employee" : "master";

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.adminUser.create({
      data: {
        email,
        password: hashedPassword,
        role,
      },
    });

    return NextResponse.json({ message: `${role === 'master' ? 'Master Admin' : 'Employee'} created successfully` }, { status: 201 });
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json({ message: "An error occurred during registration" }, { status: 500 });
  }
}
