"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OurProduct() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const cardData = [
        {
            imgSrc: "/ourProduct/AI BASED LEARNING PLATFORM.svg",
            title: "AI BASED LEARNING PLATFORM",
            description: "Introducing Infused Learning Platform to up your Career",
            courses: [
                { text: "AI Foundation Course Pack" },
                { text: "AI Starter Pack Course" },
                { text: "Mini MBA Course" },
                { text: "Indian Knowledge System IKS Course" }
            ]
        },
        {
            imgSrc: "/ourProduct/BHARATIYA GPT.svg",
            title: "BHARATIYA GPT",
            description: "Introducing Infused Learning Platform to up your Career",
            courses: [
                { text: "AI Foundation Course Pack" },
                { text: "AI Starter Pack Course" },
                { text: "Mini MBA Course" },
                { text: "Indian Knowledge System IKS Course" }
            ]
        },
        {
            imgSrc: "/ourProduct/Ai_book.svg",
            title: "AI BOOK",
            description: "Introducing Infused Learning Platform to up your Career",
            courses: [
                { text: "AI Foundation Course Pack" },
                { text: "AI Starter Pack Course" },
                { text: "Mini MBA Course" },
                { text: "Indian Knowledge System IKS Course" }
            ]
        },
        {
            imgSrc: "/ourProduct/llm.svg",
            title: "LLM COURSE",
            description: "Introducing Infused Learning Platform to up your Career",
            courses: [
                { text: "AI Foundation Course Pack" },
                { text: "AI Starter Pack Course" },
                { text: "Mini MBA Course" },
                { text: "Indian Knowledge System IKS Course" }
            ]
        }
    ];

    return (
        <section className="impact h-auto w-100">
            <div className="container-fluid px-3">
                {/* Mobile View Swiper */}


                {/* Desktop View Grid */}
                <div className="d-none d-md-flex flex-wrap justify-content-center gap-4">
                    <div className=" d-flex justify-content-center gap-3 py-3 ">
                        <div className="row justify-content-center">
                            <div className=" d-flex justify-content-center gap-5 col-11 col-md-10 col-lg-8 w-100">
                                {cardData.slice(0, 2).map((card, index) => (
                                    <div key={index} className="card-wrapper">
                                        {renderCard(card)}
                                    </div>
                                ))}
                            </div>
                            <div className="w-100 d-none d-md-block"></div>
                            <div className="bottom-row d-flex justify-content-center gap-5 col-11 col-md-10 col-lg-8 w-100">
                                {cardData.slice(2, 4).map((card, index) => (
                                    <div key={index} className="card-wrapper">
                                        {renderCard(card)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* for mobile */}
                <div className="d-block d-md-none">
                {cardData.map((card, index) => (
                    <div key={index} className="card-wrapper d-flex justify-content-center pb-3">
                        <div className="card-container">
                            <div>
                                <Image
                                    src={card.imgSrc}
                                    width={100}
                                    height={100}
                                    alt={card.title}
                                    className="rounded-md mb-3 mx-auto custom-image"
                                />
                            </div>
                            <div className="card custom-card rounded-4 w-100 p-3 pt-5">
                                <div className="card-body">
                                    <h5 className="card-title dark-pink">{card.title}</h5>
                                    <p className="card-text text-white">{card.description}</p>
                                    <ul className="list-unstyled card-list text-white mb-0">
                                        {card.courses.map((course, idx) => (
                                            <li key={idx}>{course.text}</li>
                                        ))}
                                    </ul>
                                    <div className="d-flex justify-content-end m-0 text-white">
                                        <div>Download Now</div>
                                        <div>
                                            <Image
                                                src="/icons-footer/download-arraoow.svg"
                                                width={20}
                                                height={20}
                                                alt="Download Arrow"
                                                className="ms-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}

function renderCard(card) {
    return (
        <div className="card-container">
            <img src={card.imgSrc} className="custom-image" alt="Product" />
            <div className="card custom-card rounded-4 w-100 p-3 pt-5">
                <div className="card-body">
                    <h5 className="card-title dark-pink">{card.title}</h5>
                    <p className="card-text text-white">{card.description}</p>
                    <ul className="list-unstyled card-list text-white mb-0">
                        {card.courses.map((course, idx) => (
                            <li key={idx} className="d-flex align-items-center">
                                <Image
                                    src="/icons-footer/card-arrow.svg"
                                    width={20}
                                    height={19}
                                    alt="Arrow Right"
                                    className="mb-1"
                                />
                                <span> {course.text}</span>
                                {course.badge && (
                                    <span className="badge px-3 py-2 rounded-4">{course.badge}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex justify-content-end m-0 text-white">
                        <div>Download Now</div>
                        <Image
                            src="/icons-footer/download-arraoow.svg"
                            width={20}
                            height={17}
                            alt="Arrow Right"
                            className="mt-1 ms-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
