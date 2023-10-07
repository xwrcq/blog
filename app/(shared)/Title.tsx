import React from "react";

type Props = {
  title?: string;
  text?: string;
  backgroundColor?: string;
};

const Title = ({
  title,
  text,
  backgroundColor = "bg-accent-orange",
}: Props) => {
  return (
    <div className="flex items-center gap-3 my-8">
      {title ? (
        <h4
          className={`${backgroundColor} py-2 px-5 text-wh-900 text-sm font-bold`}
        >
          {title}
        </h4>
      ) : (
        ""
      )}
      {text ? <p className="font-bold text-2xl">{text}</p> : ""}
    </div>
  );
};

export default Title;
