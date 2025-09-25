import { useState, useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

function generateZodSchema(obj) {
  // Handle null values
  if (obj === null) return "z.null()";

  // Handle arrays
  if (Array.isArray(obj)) {
    if (obj.length === 0) return "z.array(z.any())";
    return `z.array(${generateZodSchema(obj[0])})`;
  }

  // Handle objects
  if (typeof obj === "object") {
    const shape = Object.entries(obj)
      .map(([key, value]) => `  "${key}": ${generateZodSchema(value)},`)
      .join("\n");
    return `z.object({\n${shape}\n})`;
  }

  // Handle primitive types
  if (typeof obj === "string") return "z.string()";
  if (typeof obj === "number") return "z.number()";
  if (typeof obj === "boolean") return "z.boolean()";

  // if none matches, return any
  return "z.any()";
}

export default function SchemaConverter() {
  const [jsonInput, setJsonInput] = useState("");
  const [zodOutput, setZodOutput] = useState("");
  const [language, setLanguage] = useState(null);
  const [highlightedCode, setHighlightedCode] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (jsonInput.trim() === "") {
      setZodOutput("");
      return;
    }
    try {
      const parsedJson = JSON.parse(jsonInput);
      const schema = generateZodSchema(parsedJson);
      setZodOutput(`import { z } from 'zod';\n\nconst schema = ${schema};`);
    } catch (error) {
      setZodOutput("// ❌ Invalid JSON input");
    }
  }, [jsonInput]);

  const copyToClipboard = () => {
    if (!zodOutput) return;
    navigator.clipboard.writeText(zodOutput).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    if (zodOutput.trim() === "") {
      setLanguage(null);
      setHighlightedCode("");
      return;
    }
    const result = hljs.highlightAuto(zodOutput);
    setLanguage(result.language || "Unknown");
    setHighlightedCode(result.value);
  }, [zodOutput]);

  return (
    <div className="container">
      {/* JSON Input */}
      <div className="editor">
        <div className="editor-header">
          <span>JSON Input</span>
        </div>
        <textarea
          className="editor-textarea"
          placeholder="Paste your JSON here..."
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
        />
      </div>

      {/* Zod Schema */}
      <div className="editor">
        <div className="editor-header">
          <span>Zod Schema</span>
          <button className="copy-btn" onClick={copyToClipboard}>
            Copy
          </button>
        </div>
        <pre className="editor-code">
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
        {/* Copy Popup */}
        {copied && <div className="copy-popup">✅ Copied to clipboard!</div>}
      </div>
    </div>
  );
}
