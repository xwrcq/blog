import { NextResponse } from "next/server";
import { prisma } from "../../client";

type Param = { params: { id: string } };

export async function PATCH(request: Request, { params }: Param) {
  try {
    const { id } = params;
    const { title, content } = await request.json();

    const post = await prisma.post.update({
      where: { id },
      data: { title, content },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
