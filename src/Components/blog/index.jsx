import React from "react";
import Section from "../shared/section";
import BlogCard from "./blog-card";
import Blog1 from "../../images/blog/blog-thumb-1.jpg";
import Blog2 from "../../images/blog/blog-thumb-2.jpg";
import Blog3 from "../../images/blog/blog-thumb-3.jpg";
import "./style.scss"

const Blogs = () => {
  return (
    <Section id="blogs" title="Blogs and Articles" background="dark">
      <div className="blogs-content-wrapper">
        <BlogCard
          user="Robert"
          date=" 26 May 2023"
          image={Blog1}
          title="lorem ispum is best content"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <BlogCard
          user="Alex"
          date=" 26 May 2023"
          image={Blog2}
          title="lorem ispum is best content"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <BlogCard
          user="Joe"
          date=" 26 May 2023"
          image={Blog3}
          title="lorem ispum is best content"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
    </Section>
  );
};

export default Blogs;
