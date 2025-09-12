"use server"

import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import bcrypt from "bcrypt"

export const registerUSer = async (payload) => {
    // console.log(payload);
    const userCollection = dbConnect(collectionNameObj.userCollection);

    // Validation 

    const { email, password } = payload;
    if (!email || !password) {
        return null;
    }

    const user = await userCollection.findOne({ email: payload.email })
    if (!user) {
        const hashPassword = await bcrypt.hash(password, 10);
        payload.password = hashPassword;
        const result = await userCollection.insertOne(payload);

        
        return result;
    }
    else {
        return null;
    }


}