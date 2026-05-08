import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { connectDB } from '@/lib/db';
import { Contact } from '@/models/Contact';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    let fileUrl = null;
    let fileName = null;

    if (file) {
      const uploadDir = join(process.cwd(), 'public', 'uploads');
      await mkdir(uploadDir, { recursive: true });

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${file.name}`;
      const filepath = join(uploadDir, filename);

      await writeFile(filepath, buffer);
      fileUrl = `/uploads/${filename}`;
      fileName = file.name;
    }

    const contact = new Contact({
      name,
      email,
      phone,
      service,
      message,
      fileUrl,
      fileName,
    });

    await contact.save();

    return NextResponse.json(
      { message: 'Your message has been sent successfully', id: contact._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Fetch contacts error:', error);
    return NextResponse.json(
      { message: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
