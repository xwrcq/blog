import React from "react";
import Card from "../(shared)/Card";
import Title from "../(shared)/Title";
import { Post } from "@prisma/client";

type Props = {
  techPosts: Post[];
};

const Tech = ({ techPosts }: Props) => {
  return (
    <section>
      <hr className="border-1" />
      <Title title="HOT" text="Latest news in technology" />
      <div className="sm:grid grid-rows-3 grid-cols-2 gap-8 my-5">
        <Card
          className="col-span-1 row-span-3"
          imageHeight="h-96"
          post={techPosts[0]}
          isLongForm
        ></Card>
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[1]}
          isSmallCard
        ></Card>
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[2]}
          isSmallCard
        ></Card>
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[3]}
          isSmallCard
        ></Card>
      </div>
    </section>
  );
};

export default Tech;
