import { useState, useEffect, useRef } from "react";

const ExpandableText = ({ text, maxLines = 2 }: any) => {
  const [expanded, setExpanded] = useState(false);
  const [overflow, setOverflow] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const el: any = textRef.current;
    const fullHeight = el.scrollHeight;
    const visibleHeight = el.clientHeight;
    if (el) {
      setOverflow(fullHeight > visibleHeight);
    }
  }, [text, maxLines]);

  if (!text) return null;

  return (
    <div className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
      <p
        ref={textRef}
        style={{
          display: "-webkit-box",
          WebkitLineClamp: expanded ? "unset" : maxLines,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />

      {overflow && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 inline-flex items-center text-xs font-medium text-primary transition hover:opacity-80"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;