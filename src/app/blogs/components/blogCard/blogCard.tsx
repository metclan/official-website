//import nest essentials
import Image from "next/image";
import Link from "next/link";

//import libs
import { urlFor } from "@/app/lib/sanityClient";
import dateFormat from "dateformat";

//import icons & components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaArrowRightLong } from "react-icons/fa6";
export default async function BlogCard({
  blogImage,
  title,
  category,
  description,
  currentSlog,
  _createdAt,
}: Blog) {
  const blogDate = new Date(_createdAt);

  return (
    <Card className="rounded-lg overflow-hidden transition">
      <Image
        src={urlFor(blogImage)}
        alt="Blog image"
        height={1000}
        width={1000}
        className="h-64"
      />
      <CardHeader className="">
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent className="">
        <p className="line-clamp-5"> {description}</p>
      </CardContent>
      <CardFooter className="border-t flex justify-between items-center py-5 font-semibold">
        <Link
          className="text-blue-800 hover:text-blue-600 hover:underline flex items-center gap-1"
          href={`/blogs/${currentSlog}`}
        >
          <span>Read More</span>
          <FaArrowRightLong />
        </Link>
        <p className="text-sm text-gray-600 font-medium">
          {dateFormat(blogDate, "fullDate")}
        </p>
      </CardFooter>
    </Card>
  );
}
