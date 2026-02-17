// i used shiki js for code highlighting haha
import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/code-block";
import React, { Children, type ComponentPropsWithoutRef } from "react";

function extractCodeFromChildren(children: React.ReactNode): string {
  if (typeof children === "string") {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(extractCodeFromChildren).join("");
  }
  if (React.isValidElement<{ children?: React.ReactNode }>(children) && children.props?.children) {
    return extractCodeFromChildren(children.props.children);
  }
  return "";
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: (props: ComponentPropsWithoutRef<"a">) => {
      const {children, target, rel, ...rest} = props
      return <a rel="noreferrer noopener" target="_blank" {...rest}>{children}</a>
    },
    pre: (props: ComponentPropsWithoutRef<"pre">) => {
      const { children, ...rest } = props;
      // Check if children is a code element
      if (
        React.isValidElement<{ className?: string; children?: React.ReactNode }>(children) &&
        (children.type === "code" || children.props?.className?.includes("language-"))
      ) {
        const codeElement = children as React.ReactElement<{
          className?: string;
          children?: React.ReactNode;
        }>;
        const className = codeElement.props.className || "";
        const language = className.replace(/language-/, "") || "text";
        const code = extractCodeFromChildren(codeElement.props.children).replace(
          /\n$/,
          ""
        );

        return <CodeBlock code={code} language={language} />;
      }

      // Fallback to regular pre
      return <pre {...rest}>{children}</pre>;
    },
    code: (props: ComponentPropsWithoutRef<"code">) => {
      const { children, className, ...rest } = props;
      // Inline code (not inside pre)
      if (!className?.includes("language-")) {
        return (
          <code
            className="px-1.5 py-0.5 rounded text-sm bg-surface0 text-mauve"
            {...rest}
          >
            {children}
          </code>
        );
      }
      // Code inside pre is handled by the pre component
      return (
        <code className={className} {...rest}>
          {children}
        </code>
      );
    },
  };
}
