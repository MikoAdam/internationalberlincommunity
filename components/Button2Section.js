
import Link from 'next/link';

const Button2Section = ({ href = "/programs", text = "Explore Upcoming Events" }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="btn btn-primary px-6 flex items-center" title="Go to the section">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" className="mr-2 hidden sm:block">
          <path fill="currentColor"
                d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
        </svg>
        {text}
      </a>
    </Link>
  );
};

export default Button2Section;