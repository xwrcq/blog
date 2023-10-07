import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 p-6">
      <div className="sm:flex justify-between mx-auto gap-10">
        <div className="basis-1/2">
          <h4 className="font-bold">BLOG 0F FUTURE</h4>
          <p className="my-3">
            AI blog, where we explore the cutting-edge world of artificial
            intelligence, automation, and job generation. We delve into the
            latest trends, breakthroughs, and their impact on the workforce.
            Join us as we navigate this exciting journey into the future of work
            and technology.
          </p>
          <p>® All Rights Reserved</p>
        </div>
        <div className="mt-8 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-3">About blogs</p>
          <p className="my-3">About AI</p>
          <p>The last link</p>
        </div>
        <div className="mt-8 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-3">random mail</p>
          <p>(123)45-67-89</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
