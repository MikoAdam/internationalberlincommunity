import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `${config.appName} Programs & Events`,
  description:
    "Discover our diverse range of community programs including hiking, cultural events, language exchanges, and social gatherings in Berlin.",
  canonicalUrlRelative: "/programs",
});

const programs = [
  {
    title: "Hiking & Outdoor Adventures",
    description: "Explore Berlin's natural beauty and surrounding areas with guided hiking trips and outdoor activities.",
    features: [
      "Weekly hiking trips to Brandenburg region",
      "Difficulty levels for all fitness levels", 
      "Professional route planning and safety",
      "Group sizes of 20-40 participants",
      "Free participation for all members"
    ],
    icon: "🥾",
    color: "from-green-400 to-green-600"
  },
  {
    title: "Cultural Events & Museums",
    description: "Immerse yourself in Berlin's rich cultural scene through guided museum visits and cultural experiences.",
    features: [
      "Guided tours of Berlin's world-class museums",
      "Art galleries and cultural exhibitions",
      "Historical walking tours",
      "Cultural festivals and celebrations",
      "Expert guides and cultural insights"
    ],
    icon: "🏛️",
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Language Exchange Programs", 
    description: "Practice languages in a supportive environment with native speakers and fellow learners.",
    features: [
      "Weekly language exchange meetups",
      "German-English conversation groups",
      "Multilingual practice sessions", 
      "Cultural exchange through language",
      "Beginner to advanced levels welcome"
    ],
    icon: "💬",
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Social Gatherings & Picnics",
    description: "Connect with the community through relaxed social events, picnics, and casual meet-ups.",
    features: [
      "Monthly picnics in Berlin's parks",
      "Game nights and social activities",
      "International potluck dinners",
      "Seasonal celebrations and parties",
      "Networking and friendship building"
    ],
    icon: "🧺",
    color: "from-orange-400 to-orange-600"
  },
  {
    title: "Day Trips & Excursions",
    description: "Discover amazing destinations around Berlin with organized day trips to nearby cities and attractions.",
    features: [
      "Day trips to Potsdam, Dresden, Leipzig",
      "Castle visits and historic sites",
      "Nature excursions and scenic routes",
      "Group transportation arranged",
      "Local guides and cultural context"
    ],
    icon: "🚌",
    color: "from-teal-400 to-teal-600"
  },
  {
    title: "Beach Days & Water Activities",
    description: "Enjoy Berlin's lakes and beaches with organized swimming, beach volleyball, and water sports.",
    features: [
      "Visits to Wannsee, Müggelsee, and other lakes",
      "Beach volleyball and water sports",
      "Swimming and sunbathing",
      "Barbecues and lakeside picnics",
      "Summer season activities"
    ],
    icon: "🏖️",
    color: "from-cyan-400 to-cyan-600"
  }
];

const ProgramsPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>

      <main className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22L12 18.77L5.82 22L7 14.14L2 9.27l6.91-1.01z"/>
              </svg>
              <span className="text-primary font-medium">Our Programs</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-base-content mb-6 leading-tight">
              Something for <span className="text-primary">Everyone</span>
            </h1>
            
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our diverse range of community programs designed to bring people together, 
              celebrate cultures, and create lasting friendships across Berlin's international community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-base-content/60">Events Organized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">6,500+</div>
                <div className="text-sm text-base-content/60">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-base-content/60">Nationalities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-base-content/60">Free Events</div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-large hover:shadow-glow transition-all duration-300 border border-base-200 hover:border-primary/20"
                >
                  {/* Icon & Title */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-base-content/70 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-3 h-3 text-primary">
                            <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                        <span className="text-sm text-base-content/80 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-lg text-base-content/70 mb-8 max-w-2xl mx-auto">
                Getting started is easy! Join our Facebook group to stay updated on upcoming events, 
                or reach out to us directly. All our events are free and open to everyone.
              </p>
              
              {/* Join Steps */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-base-content mb-2">Join Our Group</h3>
                  <p className="text-sm text-base-content/70">Request to join our Facebook community</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-base-content mb-2">Choose Events</h3>
                  <p className="text-sm text-base-content/70">Browse and RSVP to events that interest you</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-base-content mb-2">Have Fun!</h3>
                  <p className="text-sm text-base-content/70">Meet new people and create lasting memories</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.facebook.com/groups/internationalberlinhiking" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg shadow-glow"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="mr-2">
                    <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/>
                  </svg>
                  Join Facebook Group
                </a>
                <a 
                  href="mailto:ibcmanagement@outlook.com?subject=Program%20Interest" 
                  className="btn btn-outline btn-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="mr-2">
                    <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/>
                  </svg>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-base-content mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="font-bold text-base-content mb-2">Are the events really free?</h3>
                <p className="text-base-content/70">Yes! All IBC events are completely free. For some activities like museum visits or kayaking, you'll only pay for entrance fees or equipment rentals directly to the venue.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="font-bold text-base-content mb-2">Do I need to speak German?</h3>
                <p className="text-base-content/70">Not at all! Most events are conducted in English, and our community welcomes people of all language levels. Our language exchange events are perfect for practicing German.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="font-bold text-base-content mb-2">How do I stay updated on events?</h3>
                <p className="text-base-content/70">Join our Facebook group where all events are announced. You can also follow our Instagram or contact us directly via email or WhatsApp.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="font-bold text-base-content mb-2">Can I bring friends?</h3>
                <p className="text-base-content/70">Absolutely! Friends are always welcome. Just make sure they also join our Facebook group to stay informed about community guidelines and future events.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProgramsPage;