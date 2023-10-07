import React from "react";
import Title from "../(shared)/Title";
import Card from "../(shared)/Card";
import { Post } from "@prisma/client";

type Props = {
  travelPosts: Post[];
};

const Travel = ({ travelPosts }: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1" />
      <Title
        title="TRAVEL"
        text="New travel expiriences"
        backgroundColor="bg-accent-green"
      />
      <div className="sm:flex justify-between gap-8">
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={travelPosts[0]}
        />
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={travelPosts[1]}
        />
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={travelPosts[2]}
        />
      </div>
      <Card
        className="sm:flex justify-between items-center gap-3 mt-7 mb-5"
        imageHeight="h-80"
        post={travelPosts[3]}
      />
    </section>
  );
};

export default Travel;
