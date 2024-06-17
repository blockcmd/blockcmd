import { MainNav } from "./main-nav";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";

export default function SiteHeader() {
  return (
    <div className="flex flex-row justify-between w-full mb-24 font-mono">
      <Link href="/">
        <Image
          src="/blockcmd-logo.svg"
          alt="BlockCMD Logo"
          width={1200}
          height={250}
          className="max-w-48"
          />
      </Link>
      <MainNav />
      <MobileNav />
    </div>
  )
}