import { HomePage } from "@/components/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomePage />;
}
