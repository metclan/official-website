import { connectToDatabase } from "@/utils/mongodb";
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('resume') as File;
    const jobId = formData.get('jobId') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const linkedinUrl = formData.get('linkedinUrl') as string;

    // Upload file to Cloudinary
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    interface CloudinaryResult {
      secure_url: string;
    }
    const cloudinaryResponse = await new Promise<CloudinaryResult>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { resource_type: 'auto' },
        (error, result) => {
          if (error) reject(error);
          else resolve(result as CloudinaryResult);
        }
      ).end(buffer);
    });
    console.log(cloudinaryResponse.secure_url);
    // Save data to MongoDB
    const db = connectToDatabase();
    const collection = db?.collection('resumes');
    await collection?.insertOne({
      jobId,
      firstName,
      lastName,
      email,
      linkedinUrl,
      resumeUrl: cloudinaryResponse.secure_url,
      createdAt: new Date()
    });

    return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json({ message: 'Failed to process application' }, { status: 500 });
  }
}