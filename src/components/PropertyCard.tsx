import React from "react";
import { MapPin, Ruler } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface PropertyCardProps {
  property: {
    images?: string[];
    image_url?: string;
    title?: string;
    status?: string;
    featured?: boolean;
    location?: string;
    description?: string;
    sizes?: string;
    slug?: string; // ✅ IMPORTANT
  };
  index?: number;
}

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const {
    images,
    image_url,
    title,
    status,
    featured,
    location,
    description,
    sizes,
    slug,
  } = property || {};

  return (
    <Link to={slug || "#"} className="block no-underline text-inherit">
      <div
        className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up cursor-pointer"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* IMAGE / SLIDER */}
        <div className="relative overflow-hidden h-64 bg-gray-100">
          {images && images.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
              className="h-full w-full"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${title || "Property"} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : image_url ? (
            <img
              src={image_url}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No image
            </div>
          )}

          {status && (
            <div className="absolute top-4 right-4 bg-[#D2B563] text-[#293066] px-4 py-1 rounded-full text-sm font-semibold">
              {status.toUpperCase()}
            </div>
          )}

          {featured && (
            <div className="absolute top-4 left-4 bg-[#293066] text-[#D2B563] px-4 py-1 rounded-full text-sm font-semibold">
              FEATURED
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-6">
          {location && (
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <MapPin className="w-4 h-4 text-[#D2B563]" />
              <span className="text-sm">{location}</span>
            </div>
          )}

          <h3 className="text-xl font-bold text-[#293066] mb-2 group-hover:text-[#D2B563]">
            {title}
          </h3>

          {description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {description}
            </p>
          )}

          {sizes && (
            <div className="flex items-center gap-1 text-gray-700">
              <Ruler className="w-4 h-4 text-[#D2B563]" />
              <span className="text-sm">Sizes: {sizes}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
