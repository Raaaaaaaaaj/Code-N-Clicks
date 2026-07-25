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
    
    // If admins already exist, we block public registration 
    // unless they provide a specific invite key (for this example, we just block it)
    // Employees should be created by the Master Admin from inside the dashboard later.
    if (adminCount > 0) {
      return NextResponse.json(
        { message: "Master Admin already exists. Employee registration is disabled here." },
        { status: 403 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.adminUser.create({
      data: {
        email,
        password: hashedPassword,
        role: "master",
      },
    });

    return NextResponse.json({ message: "Master Admin created successfully" }, { status: 201 });
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json({ message: "An error occurred during registration" }, { status: 500 });
  }
}
