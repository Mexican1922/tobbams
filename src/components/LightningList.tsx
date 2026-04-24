interface LightningListProps {
  items: string[];
  light?: boolean;
}

export default function LightningList({
  items,
  light = false,
}: LightningListProps) {
  return (
    <ul className="flex flex-col gap-3" role="list">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-[16px] md:text-[18px]">
          {/* Lightning bolt: 12.44×16, fill #1D0617 (dark mode: white) */}
          <svg
            width="13"
            height="16"
            viewBox="0 0 16 20"
            fill="none"
            className="shrink-0"
            aria-hidden="true"
          >
            <path
              d="M11.5 1L4 11.5h6.5L7 19l8-11H8.5L11.5 1Z"
              fill={light ? "#FFFFFF" : "#1D0617"}
              stroke={light ? "#FFFFFF" : "#1D0617"}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className={
              light
                ? "text-white font-[Nunito_Sans] font-normal"
                : "text-main-text font-[Nunito_Sans] font-normal"
            }
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
