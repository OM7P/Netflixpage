import Image from "next/image";
import { Inter } from "next/font/google";
import NetflixPage from "./netflix";
import Containttext from "./containttext";
import ContaintOne from "./about";
import MorePage from "./morecontaint";
import NextNewpage from "./nextpage";
import Lastpage from "./lastpage";
import FootarPage from "./footar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <NetflixPage />
      <ContaintOne/>
      <MorePage/>
      <Lastpage/>
      <NextNewpage/>
      <FootarPage/>
    </div>
  );
}
