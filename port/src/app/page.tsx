"use client";

import Image from "next/image";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const rou = useRouter();
  const handle = (event: MouseEvent<HTMLButtonElement>) => {
    rou.push("/contact");
  };

  return (
    <div>
      <h1>boom</h1>
      <button onClick={handle}>hello</button>
    </div>
  );
}
