// create topic 

import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    // get the title and description from the request body
    const {title, description} = await request.json();

    // connect to the database
    await connectMongoDB();

    // create the topic
    await Topic.create({title, description});

    // return the response
    return NextResponse.json({message: "Topic created successfully!"}, {status: 201});
}


export async function GET(){
    // connect to the database
    await connectMongoDB();

    // get all topics
    const topics = await Topic.find({});

    // return the response
    return NextResponse.json(topics, {status: 200});
}


export async function DELETE(request: any){
    // get the id from the request body
    const id = request.nextUrl.searchParams.get("id");

    // connect to the database
    await connectMongoDB();

    // delete the topic
    await Topic.findByIdAndDelete(id);

    // return the response
    return NextResponse.json({message: "Topic deleted successfully!"}, {status: 200});
}