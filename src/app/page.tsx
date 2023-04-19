"use client";

import { Card } from "./components/card";
import { Header } from "./components/header";

export default function Home() {
  return (
    <main className="h-screen w-full bg-slate-950 overflow-hidden">
      <Header />
      <Card />
    </main>
  );
}
