import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { highlightCode, sampleCode } from "@/lib/prism";

export function Background() {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    setHighlightedCode(highlightCode(sampleCode, "typescript"));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Cloud layers */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1695803394131-d0189d5aa8b1')",
          backgroundSize: "cover",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1668521546474-607df6f96ff0')",
          backgroundSize: "cover",
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Code overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90">
        <pre className="text-xs opacity-10 pointer-events-none overflow-hidden">
          <code 
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
            className="language-typescript"
          />
        </pre>
      </div>
    </div>
  );
}
