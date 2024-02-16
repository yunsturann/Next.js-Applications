import connectMongoDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connectMongoDB();
    const blog = await Blog.findById(id);

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch", error },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  try {
    const { title, content } = await req.json();

    await connectMongoDB();
    await Blog.findByIdAndUpdate(id, { title, content });
    return NextResponse.json(
      { message: "Updated Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update", error },
      { status: 500 }
    );
  }
}
