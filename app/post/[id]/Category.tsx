import Title from "@/app/(shared)/Title";
import { FormattedPost } from "@/app/types";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Editor } from "@tiptap/react";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  post: FormattedPost;
  handleIsEnableEdit: (bool: boolean) => void;
  isEditable: boolean;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  tempTitle: string;
  setTempTitle: Dispatch<SetStateAction<string>>;
  tempContent: string;
  setTempContent: Dispatch<SetStateAction<string>>;
  editor: Editor | null;
};

const Category = ({
  post,
  isEditable,
  handleIsEnableEdit,
  title,
  setTitle,
  tempTitle,
  setTempTitle,
  tempContent,
  setTempContent,
  editor,
}: Props) => {
  const handleEnableEdit = () => {
    handleIsEnableEdit(!isEditable);
    setTempTitle(title);
    setTempContent(editor?.getHTML() || "");
  };

  const handleCancelEdit = () => {
    handleIsEnableEdit(!isEditable);
    setTitle(tempTitle);
    editor?.commands.setContent(tempContent);
  }

  return (
    <div className="flex justify-between items-center">
      <Title title={post.category} backgroundColor="bg-accent-orange" />
      <div className="mt-4">
        {isEditable ? (
          <div className="flex justify-between gap-3">
            <button onClick={handleCancelEdit}>
              <XMarkIcon className="h-6 w-6 text-accent-orange duration-100 hover:text-accent-green" />
            </button>
          </div>
        ) : (
          <button onClick={() => handleEnableEdit()}>
            <PencilSquareIcon className="h-6 w-6 text-accent-orange duration-100 hover:text-accent-green" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Category;
