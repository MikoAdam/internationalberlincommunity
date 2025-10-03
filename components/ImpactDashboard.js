"use client";

import { useState, useEffect, useRef } from "react";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const ImpactDashboard = () => {
  const impactData = [
    {
      category: "Community Growth",
      metrics: [
        { label: "Total Members", value: 10000, suffix: "+", description: "Active community members from around the world", trend: "+150% in 2024" },
        { label: "Monthly Active Users", value: 3500, suffix: "+", description: "Members participating in events monthly", trend: "+85% this year" },
        { label: "Nationalities Represented", value: 100, suffix: "+", description: "Countries represented in our community", trend: "Global reach" }
      ]
    },
    {
      category: "Event Impact",
      metrics: [
        { label: "Events Organized", value: 200, suffix: "+", description: "Community events hosted annually", trend: "4+ events/week" },
        { label: "Total Participants", value: 5000, suffix: "+", description: "People who attended events in 2024", trend: "30-50 per event" },
        { label: "Satisfaction Rate", value: 4.9, suffix: "/5", description: "Average member satisfaction rating", trend: "98% positive" }
      ]
    },
    {
      category: "Integration Success",
      metrics: [
        { label: "Friendships Formed", value: 2500, suffix: "+", description: "New connections made through our events", trend: "Life-changing bonds" },
        { label: "Language Partners", value: 800, suffix: "+", description: "Language exchange connections facilitated", trend: "Fluency improved" },
        { label: "Cultural Events", value: 50, suffix: "+", description: "Unique cultural celebrations hosted", trend: "Celebrating diversity" }
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-br from-base-100 to-base-200 py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
              <path fill="currentColor" d="M3 3v18h18v-2H5V3z"/>
              <path fill="currentColor" d="M7 17h2v-4H7zm4 0h2V9h-2zm4 0h2V5h-2z"/>
            </svg>
            <span className="text-primary font-medium">Impact Dashboard</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-base-content mb-6">
            Measuring Our <span className="text-primary">Community Impact</span>
          </h2>
          <p className="text-xl text-base-content/70 max-w-4xl mx-auto">
            Real data from our community showing the measurable impact of grassroots integration efforts in Berlin.
          </p>
        </div>

        {/* Impact Categories */}
        <div className="space-y-16">
          {impactData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-base-100 rounded-3xl p-8 shadow-large">
              <h3 className="text-2xl font-bold text-base-content mb-8 text-center">{category.category}</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {category.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center group">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                        <CountUp end={metric.value} suffix={metric.suffix} />
                      </div>
                      <div className="font-semibold text-base-content mb-2">{metric.label}</div>
                      <div className="text-sm text-base-content/70 mb-3">{metric.description}</div>
                      <div className="inline-flex items-center gap-1 bg-primary/20 px-3 py-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 text-primary">
                          <path fill="currentColor" d="M7 14l5-5l5 5z"/>
                        </svg>
                        <span className="text-sm font-medium text-primary">{metric.trend}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline/Growth Chart Visual */}
        <div className="mt-16 bg-base-100 rounded-3xl p-8 shadow-large">
          <h3 className="text-2xl font-bold text-base-content mb-8 text-center">Community Growth Timeline</h3>
          
          <div className="relative">
            <div className="flex justify-between items-end h-64 px-4">
              {[
                { year: "2021", members: 500, events: 10 },
                { year: "2022", members: 2000, events: 50 },
                { year: "2023", members: 6500, events: 120 },
                { year: "2024", members: 10000, events: 200 }
              ].map((data, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="bg-gradient-to-t from-primary to-secondary rounded-t-lg transition-all duration-500 hover:shadow-lg"
                       style={{ height: `${(data.members / 10000) * 200}px`, width: "60px" }}>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-bold text-base-content">{data.year}</div>
                    <div className="text-sm text-primary font-semibold">{data.members.toLocaleString()} members</div>
                    <div className="text-xs text-base-content/60">{data.events} events</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-base-content mb-4">
              Partner with Proven Impact
            </h3>
            <p className="text-lg text-base-content/80 mb-6 max-w-2xl mx-auto">
              These numbers represent real lives changed, friendships formed, and communities strengthened. Join us in scaling this proven model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/partner" className="btn btn-primary btn-lg">
                Explore Partnership
              </a>
              <a href="mailto:ibcmanagement@outlook.com?subject=Impact%20Report%20Request" className="btn btn-outline btn-lg">
                Request Full Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;