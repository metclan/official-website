"use server";
import { connectToDatabase } from '@/utils/mongodb';
import { cloudinaryApi } from '@/utils/cloudinary';
import { redirect } from 'next/navigation';

type FormState = { 
  message : string;
}
export async function uploadResume (prevState : FormState, formData : FormData) {
    let redirectPath : null | string = null
    try { 
    const firstName = formData.get('firstName'); 
    const lastName = formData.get('lastName'); 
    const email = formData.get('email'); 
    const linkedin = formData.get('linkedin')
    const resume = formData.get('resume') as File;

    // upload resume to cloudinary
   const arrayBuffer = await resume.arrayBuffer();
   const buffer = Buffer.from(arrayBuffer);
   interface CloudinaryResult {
     secure_url: string;
   }

   const cloudinaryResponse = await new Promise<CloudinaryResult>((resolve, reject) => {
     cloudinaryApi.uploader.upload_stream(
       { resource_type: 'auto' },
       (error, result) => {
         if (error) reject(error);
         else resolve(result as CloudinaryResult);
       }
     ).end(buffer);
   });
   // Save data to MongoDB
   const db = connectToDatabase();
   const collection = db?.collection('resumes');
   await collection?.insertOne({
     firstName,
     lastName,
     email,
     linkedin,
     resumeUrl: cloudinaryResponse.secure_url,
     createdAt: new Date()
   });
    redirectPath = "/resume-upload-success"
    return { message : "Uploaded successfully"}
    }catch(err){
        console.log(err); 
        return { message : "An error occurred"}
    }finally{
      if(redirectPath){
        redirect(redirectPath)
      }
    }
    
}