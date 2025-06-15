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
        <h1 className="text-4xl font-extrabold pb-8 mb-6 text-base-content">
          Impressum for {config.appName}
        </h1>

        {impressum.map((item, index) => (
          <section key={index} className="mb-6 p-6 bg-base-200 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-primary">{item.title}</h2>
            {item.description.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-lg leading-relaxed mb-4 text-base-content" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
            ))}
          </section>
        ))}

        <p className="text-lg opacity-70 text-center mt-12 text-base-content">
          Last Updated: October 22, 2024
        </p>
      </div>
    </main>
  );
};

export default Impressum;