import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {
    const p = await params.id;
    const allAddProducts = dbConnect(collectionNameObj.addProductsCollection);
    const query = { _id: new ObjectId(p) }
    const singleProduct = await allAddProducts.findOne(query)
    return NextResponse.json(singleProduct)
}

export const DELETE = async (req, { params }) => {
    const p = await params.id;
    const allAddProducts = dbConnect(collectionNameObj.addProductsCollection);
    const query = { _id: new ObjectId(p) }
    const deleteResponse = await allAddProducts.deleteOne(query);

    revalidatePath("/my-products")

    return NextResponse.json(deleteResponse);
}

export const PATCH = async (req, { params }) => {
    const p = await params.id;
    const body = await req.json();
    const allAddProducts = dbConnect(collectionNameObj.addProductsCollection);
    const query = { _id: new ObjectId(p) };

    const filter = {
        $set: { ...body }
    }
    const option = {
        upsert: true
    }
    const updateResponse = await allAddProducts.updateOne(query, filter, option)
    revalidatePath('/my-products')
    return NextResponse.json(updateResponse)
}