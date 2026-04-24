interface LightningListProps {
  items: string[];
  light?: boolean;
}

export default function LightningList({
  items,
  light = false,
}: LightningListProps) {
  return (
    <ul className="flex flex-col gap-2" role="list">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 text-[15px] md:text-[16px]"
        >
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            className="shrink-0"
            aria-hidden="true"
          >
            <path
              d="M7 0L0 9h5.5L4 16l8-9H7V0z"
              fill={light ? "#FFFFFF" : "#571244"}
            />
          </svg>
          <span
            className={
              light
                ? "text-white font-sans font-normal"
                : "text-main-text font-sans font-normal"
            }
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
