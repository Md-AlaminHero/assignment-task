import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const productsCollection = dbConnect(collectionNameObj.productCollection);
    const data = await productsCollection.find().toArray();
    return NextResponse.json(data);
}