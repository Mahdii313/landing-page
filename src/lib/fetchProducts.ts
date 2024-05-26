"use server";

export async function fetchProducts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
      cache: "no-store",
    });
    let data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
}
