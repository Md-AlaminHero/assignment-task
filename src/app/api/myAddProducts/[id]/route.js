import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, {params}) => {
    const p = await params.id;
    const allAddProducts = dbConnect(collectionNameObj.addProductsCollection);
    const query = { _id: new ObjectId(p) }
    const deleteResponse = await allAddProducts.deleteOne(query);

    revalidatePath("/my-products")

    return NextResponse.json(deleteResponse);
}