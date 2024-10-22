import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";
import "../../css/Tailwind.css";

const socialLinks = [
  {
    id: 1,
    icon: <FiTwitter />,
    url: "https://twitter.com/Sriram03it",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/Sriramit03",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/sriramRamasamy03it/",
  },
];
const AppFooter = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-10 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28 gap-4 mt-0">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light">
            Follow Me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <li className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300" key={link.id}>
                <a href={link.url} target="__blank" >
                  <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Copy Right */}
        <div className="font-general-regular flex justify-center items-center text-center">
          <div className="text-lg text-ternary-dark dark:text-ternary-light">
            <p>Copyright &copy; {new Date().getFullYear()} SRIRAM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
