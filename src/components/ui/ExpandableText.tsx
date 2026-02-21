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
    <div className="text-xs text-text-secondary italic">
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
          className="text-primary text-xs"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;