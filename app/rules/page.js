import Link from "next/link";
import config from "@/config";

const rules = [
  {
    title: "1. Personal Responsibility & Safety",
    description:
      "Participate in all IBC activities at your own risk. While our organizers work hard to plan safe and enjoyable events, you are responsible for your own safety and well-being. Please prepare appropriately for each activity and inform organizers of any health conditions or concerns.",
    icon: "🛡️"
  },
  {
    title: "2. Mutual Respect & Inclusivity",
    description:
      "Treat all community members with dignity and respect, regardless of their background, nationality, religion, gender identity, sexual orientation, or any other personal characteristic. We have zero tolerance for discrimination, harassment, or disrespectful behavior.",
    icon: "🤝"
  },
  {
    title: "3. Communication & Safety Protocols",
    description:
      "Always inform an organizer if you need to leave an event early or if any issues arise. This helps us keep track of all participants and ensures everyone's safety. Use the designated communication channels for event-related discussions.",
    icon: "📢"
  },
  {
    title: "4. No Commercial Activities",
    description:
      "IBC is a community space, not a marketplace. Personal advertising, business promotion, dating solicitation, or spam are not permitted. Keep all content relevant to community activities and cultural exchange. Violations will result in warnings and potential removal.",
    icon: "🚫"
  },
  {
    title: "5. Kindness & Constructive Communication", 
    description:
      "Foster a welcoming environment through kind and courteous interactions. Healthy debates and diverse perspectives are welcome, but always communicate respectfully. Help create a space where everyone feels valued and heard.",
    icon: "💝"
  },
  {
    title: "6. Zero Tolerance for Hate Speech",
    description:
      "We absolutely do not tolerate hate speech, bullying, or discriminatory behavior of any kind. Comments targeting race, religion, culture, sexual orientation, gender identity, nationality, or any personal characteristic will result in immediate removal from the community.",
    icon: "🚨"
  },
  {
    title: "7. No Spam or Irrelevant Content",
    description:
      "Share meaningfully and avoid spam or irrelevant links. Focus on contributing valuable content that enhances our community experience. Self-promotion and off-topic posts detract from our collaborative environment.",
    icon: "📝"
  },
  {
    title: "8. Privacy & Confidentiality",
    description:
      "Respect everyone's privacy and maintain confidentiality of personal information shared within the group. What's discussed in IBC stays in IBC. Do not share photos of members without their explicit consent.",
    icon: "🔒"
  },
  {
    title: "9. Event Participation Guidelines",
    description:
      "RSVP accurately and update your status if plans change. Respect event capacity limits and cancellation policies. Be punctual and come prepared according to event guidelines. No-shows may affect future event invitations.",
    icon: "🎯"
  },
  {
    title: "10. Language & Communication",
    description:
      "While our primary language is English, we welcome and encourage multilingual interactions. Help non-native speakers feel included and be patient with language barriers. Use translation tools when helpful.",
    icon: "🌍"
  },
  {
    title: "11. Alcohol & Substance Policy",
    description:
      "Consume alcohol responsibly at events where it's permitted. Never pressure others to drink. Illegal substances are strictly prohibited at all IBC events. Anyone under the influence and behaving inappropriately will be asked to leave.",
    icon: "🍷"
  },
  {
    title: "12. Photography & Social Media",
    description:
      "Always ask for consent before taking photos of other members. Respect those who prefer not to be photographed. When sharing event photos on social media, ensure you have permission from everyone visible in the image.",
    icon: "📸"
  },
  {
    title: "13. Conflict Resolution",
    description:
      "If conflicts arise, address them constructively and involve organizers if needed. We're committed to fair mediation and finding solutions that work for everyone. Escalating conflicts publicly is discouraged - reach out to admins privately.",
    icon: "⚖️"
  },
  {
    title: "14. Community Contribution",
    description:
      "Contribute positively to our community's growth and success. Share ideas for events, help newcomers feel welcome, and volunteer when possible. Remember that IBC thrives because of member participation and mutual support.",
    icon: "🌱"
  }
];

const Rules = () => {
  return (
    <main className="max-w-4xl mx-auto">
      <div className="p-8">
        <h1 className="text-4xl font-extrabold pb-8 mb-6 text-base-content">
          Community Rules for {config.appName}
        </h1>

        {rules.map((rule, index) => (
          <section key={index} className="mb-6 p-6 bg-base-200 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <span className="text-3xl">{rule.icon}</span>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">{rule.title}</h2>
                <p className="text-lg leading-relaxed text-base-content">{rule.description}</p>
              </div>
            </div>
          </section>
        ))}

        <div className="mt-12 p-6 bg-primary/10 rounded-lg">
          <h3 className="text-xl font-bold text-primary mb-4">Questions about our rules?</h3>
          <p className="text-base-content mb-4">
            If you have any questions about these community guidelines or need clarification on any rule, 
            please don't hesitate to reach out to our team.
          </p>
          <a 
            href="mailto:ibcmanagement@outlook.com?subject=Community%20Rules%20Question" 
            className="btn btn-primary"
          >
            Contact Us
          </a>
        </div>

        <p className="text-lg opacity-70 text-center mt-12">
          Last Updated: December 2024
        </p>
      </div>
    </main>
  );
};

export default Rules;