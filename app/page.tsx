import Image from "next/image";
// import NavigationMenuDemo from "@/components/nav-bar";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col items-center gap-4 text-center w-full md:w-2/3">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">⌘ Command your blocks</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 w-96">Explore blockchains with an intuitive product suite that puts you on the cutting edge of technology.</p>
      </div>
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl mt-10 text-blue-600">Coming soon!</h1>
    </div>
  );
}
