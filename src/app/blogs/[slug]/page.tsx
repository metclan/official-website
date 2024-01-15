import { sanityClient } from "@/app/lib/sanityClient";
import { urlFor } from "@/app/lib/sanityClient";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import dateFormat from "dateformat";
type Params = {
  params: { slug: string };
};
export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const query = `*[_type == 'blog' && slug.current == "${slug}" ] {
          title, 
          description
      }[0]`;
  const blogPost = await sanityClient.fetch(query);
  const { title, description } = await blogPost;
  return {
    title: title,
    description: description,
  };
}
async function getData(slug: string): Promise<Blog> {
  const query = `*[_type == 'blog' && slug.current == "${slug}" ] {
        "currentSlog": slug.current, 
        description, 
          title, 
        blogImage,
          _createdAt,
        category,
        content
      }[0]`;
  const blogPost = await sanityClient.fetch(query);
  return blogPost;
}
export default async function BlogPost({ params: { slug } }: Params) {
  const blogPostFetch: Promise<Blog> = getData(slug);
  const { blogImage, title, _createdAt, description, content } =
    await blogPostFetch;
  const blogDate = new Date(_createdAt);
  return (
    <article className="grid grid-cols-[25%_50%_25%]">
      <div></div>
      <div className="">
        <h2 className="relative text-4xl font-medium sm:text-3xl md:text-5xl md:font-semibold w-[70%] after:content-[''] after:absolute after:w-12 after:h-[5px] after:bg-orange-500 after:left-0 after:bottom-[-10%] my-10">
          {title}
        </h2>
        <div className="my-5">
          <p className="font-light">
            Published{" "}
            <span className="text-sm decoration-dashed font-medium">
              {dateFormat(blogDate, "fullDate")}
            </span>
          </p>
        </div>
        <Image
          src={urlFor(blogImage)}
          height={700}
          width={700}
          alt="Blog Image"
          className="rounded-lg mb-10"
        />
        <h1 className="">{description}</h1>
        <div className="prose prose-li:marker:text-orange-500 prose-xl">
          <PortableText value={content} />
        </div>
      </div>
      <div> </div>
    </article>
  );
}
