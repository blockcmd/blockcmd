import MainNav from "./main-nav";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <div className="flex flex-row justify-between w-full mb-24">
      <Image
        src="/blockcmd-logo.svg"
        alt="BlockCMD Logo"
        width={1200}
        height={250}
        className="max-w-48"
        />
      <MainNav />
    </div>
  )
}