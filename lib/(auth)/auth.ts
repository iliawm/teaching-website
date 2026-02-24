import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import {MongoClient} from "mongodb";
import {headers} from "next/headers";

const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

const client = new MongoClient(process.env.MONGODB_URI!, {
    tls: true,
    tlsAllowInvalidCertificates: true,
});
const db = client.db();

export const auth = betterAuth({
    baseURL,
    secret: process.env.BETTER_AUTH_SECRET!,
    trustedOrigins: [
        'http://localhost:3000',
        'https://teaching-website-roan.vercel.app',
        baseURL
    ],
    database: mongodbAdapter(db, {
        client,
    }),
    emailAndPassword: {
        enabled: true,
    },
    user:{
        additionalFields:{
            role:{
            type: "string",
                defaultValue:"user",
                enum: ["user", "admin", "moderator","teacher"]
            },
            image:{
                type:"string",
                defaultValue:"/temp.png"
            },
            review:{
                type:"number",
                defaultValue:0,
            },
            desc:{
                type:"string",
                defaultValue:"no description",
            },
            PhoneNumber:{
                type:"string",
                defaultValue:""
                
            }
            
        }
    }
});

export async function getSession(){
    const result = await auth.api.getSession({
        headers: await headers()
    })
    return result;
}
