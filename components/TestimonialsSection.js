"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Mariia H.",
    text: "I absolutely love it. I went to 5 hikes with them and it was amazing. Also when other companies ask to pay a lot of money, this organisation is just a couple of enthusiasts, who want to share their own hobby with others and together explore beauties of this world. Apart from that, you can always find a German speaking club or group to play board games with. So join and become the part of community, you will get so much fun.",
    rating: 5,
    date: "November 2024",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    name: "Tatjana",
    text: "Open minded people. It's pleasant to communicate with everyone in real life. Perfect group for hanging out.",
    rating: 5,
    date: "November 2024",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    name: "Mariam H.",
    text: "Always an adventure! Anything organised by IBC guarantees such a wholesome and memorable time. The trips are especially fantastic, bringing together super kind, fun, warm people. It's a nice community to be part of and represents the spirit of Berlin really well! ✨",
    rating: 5,
    date: "November 2024",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 4,
    name: "Ali D.",
    text: "My experience with IBC has been incredible. I joined two trips with them, and both were well-organized, featuring fun games that brought the group closer together. The breathtaking views in Germany made the trips unforgettable, and the sense of community within the group was truly special.",
    rating: 5,
    date: "November 2024",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 5,
    name: "Cheryl",
    text: "Excellent resource to new comers in Berlin. Very active community with well thought out planning and new propositions weekly. I wish I could join more often.",
    rating: 5,
    date: "November 2024",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
  },
  {
    id: 6,
    name: "Kenza",
    text: "Very welcoming community with amazing people from all over the world. The events are always well organized and fun!",
    rating: 5,
    date: "November 2024",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

const TestimonialCard = ({ testimonial, isActive, onClick }) => (
  <div 
    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
      isActive 
        ? 'bg-gradient-to-br from-primary/10 to-secondary/10 shadow-large border-2 border-primary/20' 
        : 'bg-base-200 hover:bg-base-300 shadow-soft hover:shadow-medium'
    }`}
    onClick={onClick}
  >
    <div className="flex items-center gap-4 mb-4">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
      />
      <div>
        <h4 className="font-semibold text-base-content">{testimonial.name}</h4>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-warning"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
          <span className="text-sm text-base-content/60">{testimonial.date}</span>
        </div>
      </div>
    </div>
    <p className={`text-base-content/80 leading-relaxed ${isActive ? 'line-clamp-none' : 'line-clamp-3'}`}>
      "{testimonial.text}"
    </p>
    {!isActive && (
      <button className="text-primary text-sm font-medium mt-2 hover:underline">
        Read more →
      </button>
    )}
  </div>
);

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  return (
    <section className="bg-gradient-to-br from-base-100 to-base-200 py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
              <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span className="text-primary font-medium">5-Star Reviews</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-base-content mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Real experiences from our amazing community members who have joined our adventures and found their home in Berlin.
          </p>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-sm text-base-content/60">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-base-content/60">Happy Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-sm text-base-content/60">Community Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-base-content/60">Free Events</div>
          </div>
        </div>

        {/* Featured Testimonial */}
        {activeTestimonial && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full -ml-12 -mb-12"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-large"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-base-content">{activeTestimonial.name}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex">
                        {[...Array(activeTestimonial.rating)].map((_, i) => (
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
                      <span className="text-base-content/60">{activeTestimonial.date}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTestimonial(null)}
                    className="ml-auto p-2 hover:bg-base-200 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6">
                      <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6L17.6 19L12 13.4z"/>
                    </svg>
                  </button>
                </div>
                <blockquote className="text-lg text-base-content/80 leading-relaxed italic">
                  "{activeTestimonial.text}"
                </blockquote>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={activeTestimonial?.id === testimonial.id}
              onClick={() => setActiveTestimonial(
                activeTestimonial?.id === testimonial.id ? null : testimonial
              )}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-large max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-base-content mb-4">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-base-content/70 mb-6">
              Join thousands of community members who have found friendship, adventure, and home in Berlin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.facebook.com/groups/internationalberlinhiking" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Join Our Community
              </a>
              <a 
                href="mailto:ibcmanagement@outlook.com?subject=Community%20Interest" 
                className="btn btn-outline btn-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;