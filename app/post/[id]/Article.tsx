import React, { Dispatch, SetStateAction, useState } from "react";
import EditorMenuBar from "./EditorMenuBar";
import { Editor, EditorContent } from "@tiptap/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

type Props = {
  isEditable: boolean;
  editor: Editor | null;
  contentError: string;
  setContent: Dispatch<SetStateAction<string>>;
  title: string;
};

const Article = ({
  isEditable,
  editor,
  contentError,
  setContent,
  title,
}: Props) => {
  const [role, setRole] = useState("I am a helpful assistant");

  if (!editor) {
    return null;
  }

/*   const postAiContent = async () => {
    editor.chain().focus().setContent("Generating Ai Content...").run();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        role,
      }),
    });
    const data = await response.json();

    editor.chain().focus().setContent(data.content).run();
    setContent(data.content);
    
  }; */

  return (
    <article className="text-wh-500 leading-6">
      {/* {isEditable && (
        <div className="border-2 rounded-md bg-wh-50 p-3 mb-3">
          <h4 className="m-0 p-0">Generate AI Content</h4>
          <p className="my-1 p-0 text-xs">What type of writer do you want?</p>
          <div className="flex gap-5 justify-between">
            <input
              className="border-2 rounded-md bg-wh-50 px-3 py-1 w-full"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            />
            <button type="button" onClick={postAiContent}>
              <RocketLaunchIcon className="h-6 w-6 text-accent-orange duration-100 hover:text-accent-green" />
            </button>
          </div>
        </div>
      )} */}

      <div
        className={
          isEditable ? "border-2 rounded-md bg-wh-50 p-3" : "w-full max-w-full"
        }
      >
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <h4 className="border-1 mt-2 mb-5"></h4>
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {contentError && <p className="mt-1 text-red-500">{contentError}</p>}
    </article>
  );
};

export default Article;
