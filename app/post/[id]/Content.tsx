"use client";

import SocialLinks from "@/app/(shared)/SocialLinks";
import Title from "@/app/(shared)/Title";
import { FormattedPost } from "@/app/types";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import EditorMenuBar from "./EditorMenuBar";
import Category from "./Category";
import Article from "./Article";

type Props = {
  post: FormattedPost;
};

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState(false);

  const [title, setTitle] = useState(post.title);
  const [titleError, setTitleError] = useState("");
  const [tempTitle, setTempTitle] = useState(title);

  const [content, setContent] = useState(post.content);
  const [contentError, setContentError] = useState("");
  const [tempContent, setTempContent] = useState(content);

  const date = new Date(post.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContent("");

    setContent((editor as Editor).getHTML());
  };

  const handleOnChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitle("");

    setTitle(e.target.value);
  };

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
      },
    },
    content: content,
    editable: isEditable,
  });

  const handleIsEnableEdit = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === "") setTitleError("This field is requered");
    if (editor?.isEmpty) setContentError("This field is requered");
    if (title === "" || editor?.isEmpty) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      }
    );
    const data = await response.json();

    handleIsEnableEdit(false);
    setTempTitle("");
    setTempContent("");

    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  };

  return (
    <div className="prose w-full max-w-full mb-10">
      <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>
      <Category
        post={post}
        isEditable={isEditable}
        handleIsEnableEdit={handleIsEnableEdit}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
        editor={editor}
      />
      <form onSubmit={handleSubmit}>
        <>
          {isEditable ? (
            <div>
              <textarea
                className="border-2 rounded-md bg-wh-50 p-3 w-full"
                placeholder="Title"
                onChange={handleOnChangeTitle}
                value={title}
              />
              {titleError && <p className="mt-1 text-red-500">{titleError}</p>}
            </div>
          ) : (
            <h3 className="font-bold text-3xl mt-3">{title}</h3>
          )}
          <div className="flex gap-3">
            <h5 className="font-semibold text-xs">By {post.author}</h5>
            <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
          </div>
        </>

        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <Article
          isEditable={isEditable}
          editor={editor}
          contentError={contentError}
          setContent={setContent}
          title={title}
        />
        {isEditable ? (
          <div className="flex justify-end">
            <button
              type="submit"
              className="font-semibold bg-accent-red text-wh-10 py-2 px-5 mt-5 duration-100 hover:bg-accent-green"
            >
              SUBMIT
            </button>
          </div>
        ) : (
          <></>
        )}
      </form>

      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
