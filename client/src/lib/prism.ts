import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/themes/prism-tomorrow.css";

export const highlightCode = (code: string, language: string) => {
  return Prism.highlight(code, Prism.languages[language], language);
};

export const sampleCode = `
// Senior Full Stack Developer
interface Developer {
  name: string;
  role: "Full Stack Developer";
  experience: number;
  skills: string[];
}

const me: Developer = {
  name: "John Doe",
  role: "Full Stack Developer",
  experience: 8,
  skills: [
    "React", "Node.js",
    "TypeScript", "PostgreSQL",
    "AWS", "Docker"
  ]
};
`;
