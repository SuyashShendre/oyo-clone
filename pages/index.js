import Image from "next/image";
import { Inter } from "next/font/google";
import Header1 from "./components/Header1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header1 />
    </div>
  );
}
