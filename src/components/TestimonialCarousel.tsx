
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "أحمد بن سالم",
    location: "تونس العاصمة",
    text: "تمور ممتازة الجودة، طعم أصيل ووصلت في الوقت المحدد. أنصح بها بشدة!",
    rating: 5
  },
  {
    id: 2,
    name: "فاطمة الزهراء",
    location: "صفاقس",
    text: "أفضل تمور جربتها، دقلة النور طرية ولذيذة جداً. سأطلب مرة أخرى قريباً.",
    rating: 5
  },
  {
    id: 3,
    name: "محمد الطرابلسي",
    location: "سوسة",
    text: "خدمة ممتازة والتمور طازجة ونظيفة. شكراً للفريق المحترم.",
    rating: 5
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-16" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[200px] flex items-center">
            <div className="text-center w-full">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-amber-600">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2 space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-amber-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
