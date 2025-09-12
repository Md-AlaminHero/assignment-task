import { NextResponse } from "next/server";

const { default: dbConnect, collectionNameObj } = require("@/lib/dbConnect");
const { ObjectId } = require("mongodb");

export const GET = async (req, { params }) => {
    const p = await params.id;
    const productCollection = dbConnect(collectionNameObj.productCollection);
    const singleData = await productCollection.findOne({ _id: new ObjectId(p) })
    return NextResponse.json(singleData)
}