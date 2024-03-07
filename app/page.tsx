import Image from "next/image";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";

export default function Home() {

  const productData = [
    {
      id: 1,
      title: "Driver",
      description: "Read and write to smart contracts",
      image: "/bcmd-driver.png",
      url: "/driver"
    },
    {
      id: 2,
      title: "Scans",
      description: "Library to query all the block explorers",
      image: "/bcmd-scans.png",
      url: "/scans"
    },
    {
      id: 3,
      title: "Cache",
      description: "Pay, get paid in crypto and offramp",
      image: "/bcmd-cache.png",
      url: "/cache"
    },
    {
      id: 4,
      title: "Port",
      description: "Manage your crypto assets",
      image: "/bcmd-port.png",
      url: "/port"
    }
  ]

  return (
    <div className="flex flex-col gap-36 items-center">
      <div className="flex flex-col items-center gap-4 text-center w-full md:w-2/3">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">⌘ Command your blocks</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 w-96">Explore blockchains with an intuitive product suite that puts you on the cutting edge of technology.</p>
        <Button asChild>
          <a href="https://twitter.com/blockcmdHQ" target='_blank'>Stay updated</a>
        </Button>
      </div>
      <div className="flex flex-col text-center max-w-3xl gap-4">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">Our ethos</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 ">BlockCMD firmly believes that open source software will change the world. We build and contribute to products that push the boundry of possiblity, even when there is no direct commercial incentive. Explore our products below.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
          {productData.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
