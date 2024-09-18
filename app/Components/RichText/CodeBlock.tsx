"use client";
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { useEffect, useRef } from "react";
import he from "he";

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current && !codeRef.current.dataset.highlighted) {
      // Only highlight if not already highlighted
      hljs.highlightElement(codeRef.current);
      // Set a custom data attribute to mark it as highlighted
      codeRef.current.dataset.highlighted = "true";
    }
  }, [code]);
    // Decode any escaped HTML entities before rendering
    const decodedCode = he.decode(code);
  return (
    <pre className="w-full p-0">
      <code ref={codeRef} className="language-python text-lg rounded-lg">
        {decodedCode}
      </code>
    </pre>
  );
}

