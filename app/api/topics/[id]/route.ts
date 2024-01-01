// update the document
import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import Topic from '@/models/topic';

export async function PUT(request : NextResponse, { params } : { params: { [key: string]: string } }){
    // get the id from the request body
    const {id} = params;

    // get the title and description from the request body
    // send the data as JSON, in the request body as newTitle and newDescription
    const {newTitle: title, newDescription: description} = await request.json();

    // connect to the database
    await connectMongoDB();

    // update the topic
    await Topic.findByIdAndUpdate(id, {title, description});

    // return the response
    return NextResponse.json({message: "Topic updated successfully!"}, {status: 200});
}

// GET A SINGLE TOPIC BY ID
export async function GET(request : NextResponse, { params } : { params: { [key: string]: string } }){
    // get the id from the request body
    const {id} = params;

    // connect to the database
    await connectMongoDB();

    // get the topic
    const topic = await Topic.findById({_id: id}); // find the topic by id, and return it, if it exists, else return null.

    // return the response
    return NextResponse.json(topic, {status: 200});
}