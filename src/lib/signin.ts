"use server";

import { Redis } from "@upstash/redis";

export default async function signin(username: string, password: string) {
  try {
    const redis = new Redis({
      url: "https://absolute-sloth-41500.upstash.io",
      token: "AaIcAAIncDE2Zjk3Yjc2NmZmZWI0OTI2YTFjM2M4MjZhZjY2MjQxYnAxNDE1MDA",
    });

    const data = await redis.get(username as string);
    if (data == password) return true;
    else return false;
  } catch (error: any) {
    console.log("فرایند ثبت نام با خطا مواجه شد", error.message);
  }
}
