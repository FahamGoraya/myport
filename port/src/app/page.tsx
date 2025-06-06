"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const ro = useRouter();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    ro.push("/contact");
  };
  return (
    <div>
      <h1>yo whats good</h1>
      <button onClick={handleClick}></button>
    </div>
  );
}
