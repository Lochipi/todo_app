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