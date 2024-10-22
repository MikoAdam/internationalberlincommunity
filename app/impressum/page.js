import Link from "next/link";
import config from "@/config";

const impressum = [
  {
    title: "Legal Status",
    description: [
      "The International Berlin Community (IBC) e.V. is a legally registered association (Verein) in Germany. It operates in full compliance with German association law.",
    ],
  },
  {
    title: "Name and Location",
    description: [
      "<strong>Name:</strong> International Berlin Community (IBC) e.V.",
      "<strong>Location:</strong> Berlin, Germany",
    ],
  },
  {
    title: "Representation",
    description: [
      "The association is represented both judicially and extrajudicially by the President and Vice President, each individually authorized to represent the association.",
      "<strong>President:</strong> Lê, Phan Thanh Phương",
      "<strong>Vice President:</strong> Miko, Adam",
    ],
  },
  {
    title: "Legal Information",
    description: [
      "<strong>Amtsgericht Charlottenburg (zu VR 41380 B)</strong>",
      "Handelsregister: Hardenbergstr. 31, 10623 Berlin",
      "Vereinsregister: Amtsgerichtsplatz 1, 14057 Berlin",
    ],
  },
  {
    title: "Website Information",
    description: [
      "The website is developed by boring.hu, maintained by Adam Miko, and is the property of International Berlin Community (IBC) e.V.",
    ],
  },
  {
    title: "Contact Information",
    description: [
      "<strong>Email:</strong> ibcmanagement@outlook.com",
      "<strong>Facebook:</strong> <a href='https://www.facebook.com/groups/internationalberlinhiking' target='_blank'>International Berlin Community on Facebook</a>",
      "<strong>Instagram:</strong> <a href='https://www.instagram.com/internationalberlincommunity/' target='_blank'>@internationalberlinhiking</a>",
      "<strong>WhatsApp:</strong> <a href='https://chat.whatsapp.com/KvFKTUWcWrd6lhff5YlIow' target='_blank'>Join our WhatsApp group</a>",
    ],
  },
];

const Impressum = () => {
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
          Impressum for {config.appName}
        </h1>

        {impressum.map((item, index) => (
          <section key={index} className="mb-6 p-6 bg-base-200 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-primary">{item.title}</h2>
            {item.description.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
            ))}
          </section>
        ))}

        <p className="text-lg opacity-70 text-center mt-12">
          Last Updated: October 22, 2024
        </p>
      </div>
    </main>
  );
};

export default Impressum;
