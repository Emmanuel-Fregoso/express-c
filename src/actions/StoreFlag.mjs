import { db } from "../db/config.mjs";
import { Flag } from "../models/Flag.mjs";

export async function StoreFlag(data) {
    // const [results, metadata] = await db.query('INSERT INTO flags (name, status) VALUES (?, ?)',{
    //     replacements: [data.name, data.status]
    // });
    const newFlag = await Flag.create({
        name: data.name,
        status: data.status
    });
    return newFlag;
}