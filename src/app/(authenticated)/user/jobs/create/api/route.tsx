import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/mongodb";

export async function POST (req:Request) {
    try{
        const body = await req.json()
        const db = connectToDatabase(); 
        const insertJob = await db?.collection('jobs').insertOne(body);
        console.log(insertJob)
        return NextResponse.json({ message : 'Job inserted'})
    }catch(err){
        console.log('error'); 
        console.log(err)
        return NextResponse.json({ message : "Didn't work out"})
    }
}