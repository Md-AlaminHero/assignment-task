"use server"

import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import bcrypt from "bcrypt"

export const signInUser = async (payload) => {
    const { email, password } = payload;
    console.log(payload);

    const userCollection = dbConnect(collectionNameObj.userCollection);
    const user = await userCollection.findOne({ email });

    if (!email) {
        return null;
    }
    const isPassOk = await bcrypt.compare(user.password, password)
    if (!isPassOk) {
        return null
    }

    return user;
}