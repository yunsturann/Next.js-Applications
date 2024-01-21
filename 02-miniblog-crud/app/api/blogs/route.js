import connectMongoDB from "@/lib/mongodb";
import Blog from "@/models/Todo";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, content } = await req.json();
  await connectMongoDB();
  await Blog.create({ title, content });
  return NextResponse.json(
    { message: "Blog created successfully." },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find({});
  return NextResponse.json({ blogs }, { status: 200 });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog deleted successfully." },
    { status: 200 }
  );
}
