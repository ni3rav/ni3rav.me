"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useTheme } from "next-themes";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "text",
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    async function highlight() {
      const { codeToHtml } = await import("shiki");
      const shikiTheme = resolvedTheme === "light" ? "github-light" : "github-dark";
      const html = await codeToHtml(code, {
        lang: language,
        theme: shikiTheme,
      });
      setHighlightedCode(html);
    }
    highlight();
  }, [code, language, resolvedTheme]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="relative group rounded-lg overflow-hidden bg-mantle border border-surface1 my-6">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-crust border-b border-surface1">
        <div className="flex items-center gap-2">
          {filename && (
            <span className="text-xs text-subtext0 font-medium">{filename}</span>
          )}
          {!filename && language && language !== "text" && (
            <span className="text-xs text-overlay1 font-medium">{language}</span>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 text-xs text-overlay1 hover:text-text transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green" />
              <span className="text-green">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto">
        {highlightedCode ? (
          <div className="flex">
            {showLineNumbers && (
              <div className="flex-shrink-0 py-4 pl-4 pr-2 select-none text-right">
                {lines.map((_, i) => (
                  <div
                    key={i}
                    className="text-xs leading-6 text-overlay0 font-mono"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            )}
            <div
              className="flex-1 py-4 pr-4 pl-2 overflow-x-auto [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0 [&_code]:!bg-transparent [&_.line]:leading-6 [&_.line]:text-sm"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </div>
        ) : (
          <div className="flex">
            {showLineNumbers && (
              <div className="flex-shrink-0 py-4 pl-4 pr-2 select-none text-right">
                {lines.map((_, i) => (
                  <div
                    key={i}
                    className="text-xs leading-6 text-overlay0 font-mono"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            )}
            <pre className="flex-1 py-4 pr-4 pl-2 overflow-x-auto">
              <code className="text-sm leading-6 text-text">{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
