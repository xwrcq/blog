import { Post } from "@prisma/client";
import Tech from "./(home)/Tech";
import Travel from "./(home)/Travel";
import Trending from "./(home)/Trending";
import Other from "./(shared)/Other";
import Sidebar from "./(shared)/Sidebar";
import Subscride from "./(shared)/Subscride";
import { prisma } from "./api/client";

export const revalidate = 60;

export default async function Home() {
  const posts = await prisma.post.findMany();

  const formatPosts = () => {
    const trendingPosts: Post[] = [];
    const techPosts: Post[] = [];
    const travelPosts: Post[] = [];
    const otherPosts: Post[] = [];

    posts.forEach((post, i) => {
      if (i < 4) {
        trendingPosts.push(post);
      }

      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else {
        otherPosts.push(post);
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();

  return (
    <main className="px-10 leading-7">
      <Trending trendingPosts={trendingPosts} />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts} />
          <Other otherPosts={otherPosts} />
          <div className="hidden md:block">
            <Subscride />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
