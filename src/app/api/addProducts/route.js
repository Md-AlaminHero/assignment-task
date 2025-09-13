import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const productsCollection = dbConnect(collectionNameObj.addProductsCollection);
    const body = await req.json();
    const result = await productsCollection.insertOne(body);
    return NextResponse.json(result)
}