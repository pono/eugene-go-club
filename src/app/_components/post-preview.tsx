import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="rounded-md shadow-sm hover:shadow-md  bg-white  ">
      <div className="bg-blue-100 h-32 flex justify-center items-center rounded-t-sm">
        {/* <CoverImage slug={slug} title={title} src={coverImage} /> */}Coming
        Soon
      </div>
      <div className=" px-6 py-4">
        <h3 className="text-3xl mb-3 leading-snug">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline text-blue-700"
          >
            {title}
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
    </div>
  );
}
