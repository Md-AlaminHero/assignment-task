const { default: dbConnect, collectionNameObj } = require("@/lib/dbConnect");
const { NextResponse } = require("next/server");

export const GET = async (req) => {
    const allAddProducts = dbConnect(collectionNameObj.addProductsCollection);
    const data = await allAddProducts.find().toArray();
    return NextResponse.json(data)
}
