import connectMongoDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, content } = await req.json();
  try {
    await connectMongoDB();
    await Blog.create({ title, content });
    return NextResponse.json(
      { message: "Blog created successfully." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create blog.", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const blogs = await Blog.find({});
    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch blogs.", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  try {
    await connectMongoDB();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Blog deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete blog.", error },
      { status: 500 }
    );
  }
}
