import Link from "next/link";
import config from "@/config";

const rules = [
  {
    title: "1. Personal Responsibility",
    description:
      "Keep in mind, you're joining our hikes at your own risk. The group leaders can't be held responsible for any accidents or issues that arise among members. It's up to each member to prepare well, stay safe, and maintain a harmonious atmosphere.",
  },
  {
    title: "2. Mutual Respect",
    description:
      "Treat all members with respect. If you experience any form of harassment or inappropriate behavior, please notify the admins as soon as possible. Everyone's comfort and safety is our priority.",
  },
  {
    title: "3. Leaving Early",
    description:
      "If you need to leave a hike early, please make sure to notify one of the group admins. It's crucial for everyone's safety that we keep track of all group members.",
  },
  {
    title: "4. No Personal Advertising",
    description:
      "This is a hiking group, not a dating service or advertising space. Posts of this nature will be promptly removed, and the poster warned. Repeat offenders will be banned from the group. Please keep all content relevant and respectful.",
  },
  {
    title: "5. Be Kind and Courteous",
    description:
      "We're all in this together to create a welcoming environment. Let's treat everyone with respect. Healthy debates are natural, but kindness is required.",
  },
  {
    title: "6. No Hate Speech or Bullying",
    description:
      "Make sure that everyone feels safe. Bullying of any kind isn't allowed, and degrading comments about things such as race, religion, culture, sexual orientation, gender, or identity will not be tolerated.",
  },
  {
    title: "7. No Promotions or Spam",
    description:
      "Give more to this group than you take. Self-promotion, spam, and irrelevant links aren't allowed.",
  },
  {
    title: "8. Respect Everyone's Privacy",
    description:
      "Being part of this group requires mutual trust. Authentic, expressive discussions make groups great, but may also be sensitive and private. What's shared in the group should stay in the group.",
  },
];

const TOS = () => {
  return (
    <main className="max-w-4xl mx-auto">
      <div className="p-8">
        <Link href="/" className="btn btn-ghost mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-4xl font-extrabold pb-8 mb-6">
          Rules for the {config.appName}
        </h1>
        {rules.map((rule, index) => (
          <section key={index} className="mb-6 p-6 bg-base-200 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-primary">{rule.title}</h2>
            <p className="text-lg leading-relaxed">{rule.description}</p>
          </section>
        ))}
        <p className="text-lg opacity-70 text-center mt-12">
          Last Updated: August 29, 2024
        </p>
      </div>
    </main>
  );
};
export default TOS;