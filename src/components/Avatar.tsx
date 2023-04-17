// export default function Avatar({ image }: { image?: string | null }) {
//   return <p>{image}</p>;
// }

type Props = {
  image?: string | null;
};

export default function Avatar({ image }: Props) {
  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300">
      {/* image가 없다면 undefined를 사용 */}
      {/* eslint-disable-next-line @next/next/no-img-element  */}
      <img
        className="rounded-full p-[0.1rem]"
        src={image ?? "undefined"}
        alt="user profile"
      />
    </div>
  );
}
