import { connectToDatabase } from '@/utils/mongodb';
import { NextRequest, NextResponse } from 'next/server';
export async function GET (req:Request) {
    const db = connectToDatabase();
    const jobs = await db?.collection("jobs").find({}).toArray();
    if (!jobs) {
        return NextResponse.json({ error: "No jobs found" }, { status: 404 });
    }
    return NextResponse.json(jobs);
}
export async function POST (req:Request) {
    const db = connectToDatabase();
    const { title, description, isRemote, isFullTime } = await req.json();
    const job = await db?.collection("jobs").insertOne({ title, description, isRemote, isFullTime });
    return NextResponse.json(job);
}   