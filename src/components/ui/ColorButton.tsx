type Props = {
  text: string;
  onClick: () => void;
  size: "small" | "big";
};

// props로 전달하지 size를 명시하지않으면 기본적으로 small사이즈 설정
export default function ColorButton({ text, onClick, size = "small" }: Props) {
  return (
    <div
      className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300
    ${size === "big" ? "p-[0.3rem]" : "p-[0.15rem]"}`}
    >
      <button
        className={`bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity"
        ${size === "big" ? "p-4 text-2xl" : "p-[0.3rem] text-base"}
        `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
