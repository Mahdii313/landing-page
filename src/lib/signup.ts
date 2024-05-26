"use server";

import { Redis } from "@upstash/redis";

export default async function signup(formData: FormData) {
  try {
    const redis = new Redis({
      url: "https://absolute-sloth-41500.upstash.io",
      token: "AaIcAAIncDE2Zjk3Yjc2NmZmZWI0OTI2YTFjM2M4MjZhZjY2MjQxYnAxNDE1MDA",
    });

    const username = formData.get("username");
    const password = formData.get("password");

    const data = await redis.set(username as string, password);
  } catch (error: any) {
    console.log("فرایند ثبت نام با خطا مواجه شد", error.message);
  }
}
