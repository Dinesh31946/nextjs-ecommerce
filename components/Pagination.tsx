"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    return (
        <Swiper
            modules={[SwiperPagination]}
            spaceBetween={10}
            slidesPerView={5}
            centeredSlides={true}
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className}">${index + 1}</span>`;
                },
            }}
            onSlideChange={(swiper) => onPageChange(swiper.activeIndex + 1)}
            initialSlide={currentPage - 1}
        >
            {Array.from({ length: totalPages }, (_, i) => (
                <SwiperSlide key={i}>
                    <div
                        className={`cursor-pointer p-2 rounded ${
                            i + 1 === currentPage
                                ? "bg-[#86d7ff] text-white"
                                : "bg-gray-200"
                        }`}
                    >
                        {i + 1}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
