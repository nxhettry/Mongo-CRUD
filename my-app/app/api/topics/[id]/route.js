import connectMongo from "@/lib/mongodb";
import Topic from "@/model/topic";
import { NextResponse } from "next/server";

export async function PUT (req,{params}) {
    const {id} = params;
    const {newTopic: topic, newDescription: description} = await req.json();
    await connectMongo();
    await Topic.findByIdAndUpdate(id, {topic, description});
    return NextResponse.json({message: "Topic updated successfully", status: 200});
}

export async function GET (req, {params}) {
    const {id} = params;
    await connectMongo();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({topic}, {status: 200});
}