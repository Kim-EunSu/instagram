import dynamic from "next/dynamic";

const GridLoader = dynamic(
  () => import("react-spinners").then((lib) => lib.GridLoader),
  //optional설정(서버에서 미리 렌더링 하지말라고 설정)
  {
    ssr: false,
  }
);

type Props = {
  color?: string;
};

//color는 지정하지않으면 기본적으로 red색상 사용
export default function GridSpinner({ color = "red" }: Props) {
  return <GridLoader color={color} />;
}
