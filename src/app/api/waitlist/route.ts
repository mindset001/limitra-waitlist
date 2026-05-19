import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phoneNumber } = body;

    // Validate required fields
    if (!fullName || !email || !phoneNumber) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingMember = await prisma.waitlistMember.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingMember) {
      return NextResponse.json(
        { error: 'Email already registered', position: existingMember.position },
        { status: 409 }
      );
    }

    // Generate random position between 100 and 5000
    const position = Math.floor(Math.random() * (5000 - 100 + 1)) + 100;

    // Create new waitlist member
    const member = await prisma.waitlistMember.create({
      data: {
        fullName: fullName.trim(),
        email: email.toLowerCase(),
        phoneNumber: phoneNumber.trim(),
        position,
      },
    });

    return NextResponse.json(
      { success: true, position: member.position, id: member.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist API Error:', error);
    
    // Handle unique constraint violation
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { error: 'This email is already registered' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
