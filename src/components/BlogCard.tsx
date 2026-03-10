import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  title: string;
  image: string;
  date: string;
}

export default function BlogCard({ id, title, image, date }: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover"
      />

      {/* Content Section */}
      <div className="p-6">
        <p className="text-sm text-gray-500">{date}</p>

        <h2 className="text-xl font-bold text-gray-900 mt-2">
          {title}
        </h2>

        <Link
          to={`/blog/${id}`}
          className="inline-block mt-4 text-[#FCAF2E] font-semibold"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}

