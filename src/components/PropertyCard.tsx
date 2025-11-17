import React from "react";
import { Maximize, MapPin, Ruler } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Inline type definition (no separate file needed)
export interface PropertyCardProps {
  property: {
    images?: string[];
    image_url?: string;
    title?: string;
    status?: string;
    featured?: boolean;
    location?: string;
    description?: string;
    area_sqft?: number | string;
    bedrooms?: number | string;
    sizes?: string;
    price?: number | string;
    price_unit?: string;
  };
  index?: number;
  onViewDetails?: () => void;
}

export default function PropertyCard({
  property,
  index = 0,
  onViewDetails,
}: PropertyCardProps) {
  const {
    images,
    image_url,
    title,
    status,
    featured,
    location,
    description,
    area_sqft,
    sizes,
    price,
  } = property || {};

  return (
    <div
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      role="article"
      aria-label={title || "Property card"}
    >
      {/* 🔹 Image / Slider Section */}
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
                  alt={`${title || "Property"} image ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : image_url ? (
          <img
            src={image_url}
            alt={title || "Property image"}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}

        {/* 🔸 Status & Featured Tags */}
        {status && (
          <div className="absolute top-4 right-4 bg-[#D2B563] text-[#293066] px-4 py-1 rounded-full font-semibold text-sm">
            {status.toUpperCase()}
          </div>
        )}
        {featured && (
          <div className="absolute top-4 left-4 bg-[#293066] text-[#D2B563] px-4 py-1 rounded-full font-semibold text-sm">
            FEATURED
          </div>
        )}
      </div>

      {/* 🔹 Content Section */}
      <div className="p-6">
        {location && (
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <MapPin className="w-4 h-4 text-[#D2B563]" aria-hidden="true" />
            <span className="text-sm">{location}</span>
          </div>
        )}

        {title && (
          <h3 className="text-xl font-bold text-[#293066] mb-2 group-hover:text-[#D2B563] transition-colors">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        )}

        <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-700">
         <div className="flex items-center gap-1">
  <Maximize className="w-4 h-4 text-[#D2B563]" />
  <span className="text-sm">
    {property?.price_unit ?? "—"}
  </span>
</div>


          {sizes && (
            <div className="flex items-center gap-1">
              <Ruler className="w-4 h-4 text-[#D2B563]" />
              <span className="text-sm">Sizes: {sizes}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
  <div className="flex flex-col">
    <span className="text-sm text-gray-500 font-medium tracking-wide">
      Starting from
    </span>
    <span className="text-2xl font-bold text-[#293066] flex items-baseline">
      <span className="text-[#D2B563] text-2xl mr-1 font-bold">₹</span>
      {price || "Price on request"}
    </span>
  </div>

  <button
    onClick={onViewDetails}
    className="bg-[#293066] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#D2B563] hover:text-[#293066] transition-all"
  >
    View Details
  </button>
</div>

      </div>
    </div>
  );
}
