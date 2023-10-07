import Sidebar from "@/app/(shared)/Sidebar";
import { prisma } from "@/app/api/client";
import React from "react";
import { FormattedPost } from "@/app/types";
import Content from "./Content";

type Props = {
  params: { id: string };
};

export const revalidate = 60;

const getPost = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    console.log(`Post with ${id} not found`);
    return null;
  }

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };

  return formattedPost;
};

const Post = async ({ params }: Props) => {
  const { id } = params;
  const post: FormattedPost | null = await getPost(id);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Post;
