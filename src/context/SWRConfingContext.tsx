"use client";

import useSWR, { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};

export default function SWRConfigContext({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
