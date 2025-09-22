import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CLIENTS_REVIEWS = [
  {
    client: "Aiden Smith",
    rating: 5,
    feedback: "Delivered the project on time with clean, efficient code. Very professional.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    client: "Olivia Brown",
    rating: 5,
    feedback: "Extremely responsive and detail-oriented. The final product exceeded expectations.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    client: "Liam Johnson",
    rating: 5,
    feedback: "Handled complex backend APIs and frontend integration flawlessly. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    client: "Sophia Davis",
    rating: 5,
    feedback: "Fast, professional, and creative. Delivered a high-quality solution for our platform.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    client: "Noah Wilson",
    rating: 5,
    feedback: "Great communication, efficient workflow, and the project was delivered perfectly.",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg"
  },
];

export default function ClientsReviews() {
  const sliderRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const firstCard = sliderRef.current.querySelector(".review-card");
    if (firstCard) setCardWidth(firstCard.clientWidth + 24); // include gap
  }, []);

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    }
  };

  const slideNext = () => {
    const nextIndex = (currentIndex + 1) % CLIENTS_REVIEWS.length;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const slidePrev = () => {
    const prevIndex = (currentIndex - 1 + CLIENTS_REVIEWS.length) % CLIENTS_REVIEWS.length;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  return (
    <section id="reviews" className="py-16 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-400 opacity-10 animate-gradient-slow pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Clients Reviews
        </h2>

        <button
          onClick={slidePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 dark:bg-gray-700/20 hover:bg-white/40 dark:hover:bg-gray-700/40 p-2 rounded-full shadow-md"
        >
          <FiChevronLeft size={24} className="text-gray-900 dark:text-white" />
        </button>
        <button
          onClick={slideNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 dark:bg-gray-700/20 hover:bg-white/40 dark:hover:bg-gray-700/40 p-2 rounded-full shadow-md"
        >
          <FiChevronRight size={24} className="text-gray-900 dark:text-white" />
        </button>

        <motion.div
          ref={sliderRef}
          className="flex gap-6 overflow-hidden py-4 cursor-grab scroll-smooth"
          drag="x"
          dragConstraints={{ left: -9999, right: 9999 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {CLIENTS_REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              className="review-card relative min-w-[280px] bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-gray-700/40 rounded-2xl shadow-lg p-6 flex-shrink-0 transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 opacity-15 rounded-2xl blur-xl animate-pulse pointer-events-none"></div>
              <div className="relative flex items-center gap-4 mb-4">
                <img
                  src={r.avatar}
                  alt={r.client}
                  className="w-14 h-14 rounded-full border-2 border-white/30 dark:border-gray-400 shadow-sm"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{r.client}</h3>
                  <div className="text-yellow-400 flex gap-1">
                    {"⭐".repeat(r.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed relative">{r.feedback}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
