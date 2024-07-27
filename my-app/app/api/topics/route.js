import connectMongo from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Topic from "@/model/topic";

export async function POST(req) {
  const { title, description } = await req.json();
  await connectMongo();
  await Topic.create({ title, description });
  return NextResponse.json({
    status: 201,
    body: { message: "Topic created successfully" },
  });
}

export async function GET () {
    await connectMongo();
    const topics = await Topic.find();
    return NextResponse.json({topics});
}

export async function DELETE (req) {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongo();
    await Topic.findByIdAndDelete(id); 
    return NextResponse.json({message: "Topic deleted successfully", status: 200});
}