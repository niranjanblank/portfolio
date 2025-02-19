import Link from "next/link";
import CvDownloader from "./CvDownloader";
import ThemeSwitcherButton from "./ThemeSwitcherButton";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-zinc-900 flex flex-col items-center justify-center gap-6 font-semibold text-2xl font-mova sm:hidden shadow-lg z-50">
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-4xl dark:text-white"
        >
          ✖
        </button>
        <Link
          href="/blog"
          className="dark:text-gray-400 text-gray-700"
          onClick={toggleMenu}
        >
          BLOG
        </Link>
        <Link
          href="/#projects"
          className="dark:text-gray-400 text-gray-700"
          onClick={toggleMenu}
        >
          PROJECTS
        </Link>
        <CvDownloader />
        <ThemeSwitcherButton />
      </div>
    )
  );
};

export default MobileMenu;
