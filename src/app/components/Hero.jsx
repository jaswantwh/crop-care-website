
"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "AGROCHEMICAL MANUFACTURING",
    title: <>Protecting Crops.<br /><span>Empo Agriculture.</span></>,
    description:
      "Supporting agricultural progress with focused agrochemical manufacturing and dependable B2B partnerships.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85",
    alt: "Expansive green agricultural crop fields",
  },
  {
    eyebrow: "EXPERIENCE & EXPERTISE",
    title: <>Driven by Experience.<br /><span>Focused on Quality.</span></>,
    description:
      "A manufacturing-focused approach built around product consistency, process discipline and long-term business relationships.",
    image:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=2000&q=85",
    alt: "Healthy green crops growing in an agricultural field",
  },
  {
    eyebrow: "GROWING TOGETHER",
    title: <>Supporting Agriculture<br /><span>Through Innovation.</span></>,
    description:
      "Working with agricultural businesses to support crop protection needs through a diverse agrochemical portfolio.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=85",
    alt: "Agricultural farm with rows of growing crops",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <section
      className="hero-section"
      aria-label="Crop Care introduction"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.eyebrow}
          className={`hero-slide ${activeSlide === index ? "active" : ""}`}
          style={{ backgroundImage: `url("${slide.image}")` }}
          role="img"
          aria-label={slide.alt}
        />
      ))}

      <div className="hero-overlay" />

      <div className="container-custom hero-content-wrap">
        <div className="hero-content" key={activeSlide}>
          <div className="hero-eyebrow">
            {slides[activeSlide].eyebrow}
          </div>

          <h1 className="hero-title">
            {slides[activeSlide].title}
          </h1>

          <p className="hero-description">
            {slides[activeSlide].description}
          </p>

          <div className="hero-buttons">
            <a href="#products" className="hero-button-light">
              Explore Our Products <span>↗</span>
            </a>

            <a href="#about" className="hero-button-outline">
              Discover Crop Care
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom hero-bottom">
        <div className="hero-progress" aria-label="Choose hero slide">
          {slides.map((slide, index) => (
            <button
              key={slide.eyebrow}
              type="button"
              className={activeSlide === index ? "active" : ""}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
            />
          ))}
        </div>

        <div className="hero-controls">
          <button
            type="button"
            onClick={() => goToSlide(activeSlide - 1)}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => goToSlide(activeSlide + 1)}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}