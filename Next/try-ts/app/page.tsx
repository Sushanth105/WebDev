"use client";

import React, { UIEvent } from "react";

export default function Home() {
  // Corrected type annotation for the event
  const handleScroll = (event: UIEvent<HTMLDivElement>): void => {
    console.log(event.target);
    // Type assertion is still good practice here
    const target = event.target as HTMLDivElement;
    console.log("Scroll Top:", target.scrollTop);
    console.log("Scroll Height:", target.scrollHeight);
    console.log("Client Height:", target.clientHeight);
  };

  return (
    <div
      className="h-[200px] overflow-auto border border-black"
      onScroll={handleScroll}
    >
      <div className="h-[500px]">Scroll down this div!</div>
    </div>
  );
}
