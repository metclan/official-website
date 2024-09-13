import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/mongodb";
export async function GET (req:Request) {
    const db = connectToDatabase();
    const jobs = await db?.collection("jobs").find({}).toArray();
    if (!jobs) {
        return NextResponse.json({ error: "No jobs found" }, { status: 404 });
    }
    return NextResponse.json(jobs);
}