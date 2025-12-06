"use client";

import { useLanguage } from "./LanguageContext";
import { t } from "@/lib/translations";

const TestimonialCard = ({ testimonial }) => {
  // Adjust text size based on length
  const getTextSize = (textLength) => {
    if (textLength < 100) return "text-lg"; // Short text = larger
    if (textLength < 200) return "text-base"; // Medium text = normal
    if (textLength < 300) return "text-sm"; // Long text = smaller
    return "text-xs"; // Very long text = smallest
  };

  const textSize = getTextSize(testimonial.text.length);

  return (
    <div className="bg-base-100 rounded-xl p-6 shadow-lg border border-base-300 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-bold text-lg text-base-content">{testimonial.name}</h4>
          <span className="text-sm text-base-content/60">{testimonial.date}</span>
        </div>
        <div className="flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-warning"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Review Text - Dynamic size */}
      <p className={`text-base-content/80 leading-relaxed flex-1 ${textSize}`}>
        "{testimonial.text}"
      </p>
    </div>
  );
};

const TestimonialsSection = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: "Mariia H.",
      text: t('testimonialMariia', language),
      rating: 5,
      date: t('testimonialDateNov2024', language),
    },
    {
      id: 2,
      name: "Tatjana",
      text: t('testimonialTatjana', language),
      rating: 5,
      date: t('testimonialDateNov2024', language),
    },
    {
      id: 3,
      name: "Mariam H.",
      text: t('testimonialMariam', language),
      rating: 5,
      date: t('testimonialDateNov2024', language),
    },
    {
      id: 4,
      name: "Ali D.",
      text: t('testimonialAli', language),
      rating: 5,
      date: t('testimonialDateNov2024', language),
    },
    {
      id: 5,
      name: "Cheryl",
      text: t('testimonialCheryl', language),
      rating: 5,
      date: t('testimonialDateNov2024', language),
    },
    {
      id: 6,
      name: "Kenza",
      text: t('testimonialKenza', language),
      rating: 5,
      date: t('testimonialDateNov2024', language),
    }
  ];

  return (
    <section className="bg-gradient-to-br from-base-100 to-base-200 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
              <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span className="text-primary font-medium">{t('fiveStarReviews', language)}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-base-content mb-4 md:mb-6">
            {t('whatCommunitySays', language)}
          </h2>
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
            {t('realExperiences', language)}
          </p>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">5.0★</div>
            <div className="text-xs md:text-sm text-base-content/60">{t('averageRating', language)}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-xs md:text-sm text-base-content/60">{t('happyReviews', language)}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-xs md:text-sm text-base-content/60">{t('communityMembers', language)}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-xs md:text-sm text-base-content/60">{t('freeEvents', language)}</div>
          </div>
        </div>

        {/* Testimonials Grid - All same height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-base-content mb-4">
              {t('readyCreateStory', language)}
            </h3>
            <p className="text-base-content/70 mb-8 text-lg">
              {t('joinThousands', language)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.facebook.com/groups/internationalberlinhiking" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                {t('joinOurCommunity', language)}
              </a>
              <a 
                href="mailto:ibcmanagement@outlook.com?subject=Community%20Interest" 
                className="btn btn-outline btn-lg"
              >
                {t('contactUs', language)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;