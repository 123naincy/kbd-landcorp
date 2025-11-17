import React, { useState } from "react";
import { mockProperties, type Property } from "../data/mockData";
import PropertyCard from "./PropertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Reveal from "./animations/Reveal";

type FilterType = "all" | "residential" | "commercial";

export default function Properties() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProperties =
    filter === "all"
      ? mockProperties
      : mockProperties.filter((p) => p.property_type === filter);

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 🔹 Section Header */}
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#293066] mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of premium properties tailored to your lifestyle
          </p>
        </Reveal>

        {/* 🔹 Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(["all", "residential", "commercial"] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === f
                  ? "bg-[#293066] text-white"
                  : "bg-white text-[#293066] hover:bg-[#D2B563] hover:text-[#293066]"
              }`}
            >
              {f === "all"
                ? "All Properties"
                : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* 🔹 Swiper Slider (no arrows) */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {filteredProperties.map((property, index) => (
            <SwiperSlide key={property.id}>
              <PropertyCard property={property} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
