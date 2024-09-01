import Link from "next/link";
import config from "@/config";

const statutes = [
  {
    title: "Name and Location",
    description: [
      "<strong>Name:</strong> The association is called the International Berlin Community (IBC). Upon registration, it will bear the suffix 'e.V.' to indicate its status as a registered association.",
      "<strong>Location:</strong> The association is based in Berlin, Germany.",
      "<strong>Fiscal Year:</strong> The fiscal year corresponds to the calendar year.",
    ],
  },
  {
    title: "Purpose and Non-Profit Status",
    description: [
      "The association, headquartered in Berlin, exclusively and directly pursues charitable purposes as defined in the section 'Tax-privileged purposes' of the German Tax Code.",
      "The purpose of the association is to promote international understanding, tolerance, cultural exchange, and the creation of a welcoming and inclusive community in Berlin through social events. This purpose is realized through various social, cultural, educational, and sports activities.",
      "The association operates on a selfless basis; it does not primarily pursue its own economic interests.",
      "Funds of the association may only be used for the statutory purposes. Members do not receive any allocations from the association's funds.",
      "No person shall be favored by expenditures that are unrelated to the purpose of the association or by disproportionately high remuneration.",
    ],
  },
  {
    title: "Membership",
    description: [
      "<strong>Membership Acquisition:</strong> Any natural person can become a member of the association. Membership applications must be submitted in writing to the board. The board decides on the application at its discretion and is not obliged to justify any rejections.",
      "<strong>Termination of Membership:</strong> Membership in the association ends upon death (or dissolution in the case of legal entities), withdrawal, or exclusion. Withdrawal must be declared in writing to the board. A member may be excluded from the association by resolution of the general meeting if they cause significant harm to the reputation or interests of the association.",
    ],
  },
  {
    title: "Rights and Duties of Members",
    description: [
      "Each member has the right to use the association's facilities and participate in joint events. Each member has equal voting and election rights in the general meeting. Each member is obliged to promote the interests of the association as much as possible and support the association's activities.",
    ],
  },
  {
    title: "Membership Structure",
    description: [
      "Formal membership is limited to organizers actively involved in planning and conducting events. Organizers are considered members of the association and are responsible for its operations. General participants in events are not formal members but are invited to participate in all activities as long as they agree to the event rules and have not been excluded for past violations. This structure simplifies administration and complies with data protection regulations. The membership structure can be adjusted as needed in the future.",
    ],
  },
  {
    title: "Membership Fees",
    description: [
      "The association operates on a volunteer basis without membership fees or donation options. However, in collaboration with external institutions, compensations may be granted depending on the project to achieve project goals.",
    ],
  },
  {
    title: "Documentation of Resolutions",
    description: [
      "All resolutions passed during meetings are recorded in written minutes.",
    ],
  },
  {
    title: "Governing Bodies of the Association",
    description: [
      "The governing bodies of the association are the Board of Directors and the General Meeting.",
    ],
  },
  {
    title: "Board of Directors",
    description: [
      "The board consists of the Chairperson and the Deputy Chairperson. Each board member represents the association individually. Board members may not use their board privileges for personal gain, whether economic, political, or otherwise. They may only use channels available to all members.",
    ],
  },
  {
    title: "Duties of the Board",
    description: [
      "The board is responsible for representing the association under § 26 of the German Civil Code and managing its affairs. Its tasks include:",

      " - Calling and preparing general meetings, including setting the agenda.",
      " - Executing resolutions of the general meeting.",
      " - Managing the association's assets and preparing the annual report.",
      " - Admitting new members.",
    ],
  },
  {
    title: "Appointment of the Board",
    description: [
      "Board members are elected individually by the general meeting for a term of two years. Board members must be association members; board membership ends with the termination of association membership. Re-election or premature dismissal of a member by the general meeting is permissible. A member remains in office after the regular term until a successor is elected.",
      "If a board member leaves office prematurely, the remaining board members may appoint a member of the association to the board until the next general meeting elects a successor.",
    ],
  },
  {
    title: "Board Meetings and Resolutions",
    description: [
      "The board meets as needed. Meetings are called by the Chairperson or, in their absence, by the Deputy Chairperson. A one-week notice period should be observed. The board is quorum if at least two members are present. Resolutions are passed by a majority of valid votes cast. In the event of a tie, the Chairperson's vote, or in their absence, the Deputy Chairperson's vote, decides.",
      "Board resolutions must be recorded in writing and signed by the minute-taker and the Chairperson, or in their absence, by the Deputy Chairperson or another board member.",
    ],
  },
  {
    title: "Duties of the General Meeting",
    description: [
      "The general meeting is responsible for decisions in the following matters:",

      " - Amendments to the statutes.",
      " - Setting membership fees.",
      " - Election and dismissal of board members.",
      " - Acceptance of the annual report and discharge of the board.",
      " - Dissolution of the association.",
    ],
  },
  {
    title: "Calling the General Meeting",
    description: [
      "The general meeting must be called at least once a year, preferably in the first quarter, by the board. The meeting is called in writing, with a two-week notice period, and must include the agenda.",
      "The agenda is set by the board. Any association member may request an addition to the agenda in writing to the board at least one week before the general meeting. The board decides on the request. The general meeting decides by a majority vote of the members present on motions to the agenda that were not included by the board or are first presented at the general meeting; this does not apply to motions for amendments to the statutes, changes in membership fees, or the dissolution of the association.",
      "The board must call an extraordinary general meeting if the association's interests require it or if at least one-tenth of the members request it in writing, stating the purpose and reasons.",
    ],
  },
  {
    title: "Resolutions of the General Meeting",
    description: [
      "The general meeting is chaired by the Chairperson of the board, or in their absence, by the Deputy Chairperson or a meeting leader elected by the general meeting.",
      "The general meeting is quorum if at least one-third of all association members are present. If the meeting is not quorum, the board must call a second general meeting with the same agenda within four weeks. This meeting is quorum regardless of the number of members present. This must be indicated in the invitation.",
      "The general meeting passes resolutions by open vote with a majority of the votes of the members present. If no candidate obtains a majority of the votes of the members present in an election, the candidate who receives the majority of the valid votes cast is elected; a runoff election is held between several candidates. A resolution amending the statutes requires a majority of three-quarters of the votes cast. A resolution to change the association's purpose requires the consent of all members; the consent of non-attending members must be given in writing.",
      "Minutes must be taken of the proceedings of the general meeting and the resolutions passed, signed by the minute-taker and the meeting leader.",
    ],
  },
  {
    title: "Dissolution of the Association",
    description: [
      "In the event of the dissolution of the association, the Chairperson and the Deputy Chairperson are jointly authorized liquidators unless the general meeting appoints other persons.",
      "In the event of the dissolution of the association, its assets shall pass to another charitable organization serving a similar purpose. The name of the organization may be determined by the general meeting, or the decision may be delegated to the board.",
      "The above provisions shall apply accordingly if the association loses its legal capacity.",
    ],
  },
];

const Statutes = () => {
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
          Legal details and disclosures regarding the {config.appName}
        </h1>
        {statutes.map((statute, index) => (
          <section key={index} className="mb-6 p-6 bg-base-200 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-primary">{statute.title}</h2>
            {statute.description.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
            ))}
          </section>
        ))}
        <p className="text-lg opacity-70 text-center mt-12">
          Last Updated: August 29, 2024
        </p>
      </div>
    </main>
  );
};
export default Statutes;