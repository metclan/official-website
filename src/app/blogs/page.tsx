//import components
import BlogCard from "./components/blogCard/blogCard";
import { sanityClient } from "@/app/lib/sanityClient";

export const revalidate = 30; // revalidate at most every seconds
export const metadata = {
  title: "Blog | Metclan Official Blog",
  description: "Discover more about tech",
};
async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc){
    "currentSlog": slug.current, 
    description, 
      title, 
    blogImage,
    _createdAt,
    category
  }`;
  const fetchData = await sanityClient.fetch(query);
  const fetchedData = await fetchData;
  return fetchedData;
}

export default async function Blogs() {
  const blogData: Promise<Blog[]> = await getData();
  const content = (await blogData).map(
    ({ blogImage, title, category, currentSlog, _createdAt, description }) => (
      <BlogCard
        key={currentSlog}
        blogImage={blogImage}
        title={title}
        category={category}
        description={description}
        currentSlog={currentSlog}
        _createdAt={_createdAt}
      />
    )
  );
  return (
    <div>
      <div className="relative mb-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#7c2d12"
            fillOpacity="1"
            d="M0,32L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
        <div className="absolute top-1/2 w-full">
          <div className="w-[90%] mx-auto">
            <h2 className="text-white text-4xl font-medium sm:text-3xl md:text-5xl md:font-semibold shadow">
              The Metclan Blog
            </h2>
            <h5 className="text-2xl text-white font-medium">
              Discover your part of tech
            </h5>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-[90%] mx-auto mb-20">
        {content}
      </div>
    </div>
  );
}
