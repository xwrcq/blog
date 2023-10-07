import React from "react";
import Title from "./Title";
import SocialLinks from "./SocialLinks";
import Subscride from "./Subscride";
import Image from "next/image";
import Ad2 from "@/public/assets/ad-2.png";
import AboutProfile from "@/public/assets/about-profile.jpg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 mt-8 py-3 px-5 text-wh-50 text-sm font-bold text-center">
        Subscribe and Follow
      </h4>
      <div className="m-5">
        <SocialLinks isDark />
      </div>
      <Subscride />     
        <Image
          className="my-6 w-full hidden md:block"
          src={Ad2}
          alt="advert"
          width={500}
          height={1000}
          style={{ objectFit: "cover" }}
        />      
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-sm font-bold text-center">
        About the Blog
      </h4>
      <div className="mt-6 mb-2 flex justify-center">
        <Image
          src={AboutProfile}
          alt="profile"
          style={{ width: "500px", height: "250px", objectFit: "cover" }}
          placeholder="blur"
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Author Name
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum alias
        veniam nostrum facilis?
      </p>
    </section>
  );
};

export default Sidebar;
