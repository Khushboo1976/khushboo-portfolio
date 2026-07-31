import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HeroSocial() {
  return (
    <div className="mt-10 flex items-center gap-6">
      <a
        href="https://github.com/Khushboo1976"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-zinc-400 transition hover:text-blue-500"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/khushboo-goyal-32bab0291"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-zinc-400 transition hover:text-blue-500"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:khushboo12244@gmail.com"
        className="text-2xl text-zinc-400 transition hover:text-blue-500"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}
