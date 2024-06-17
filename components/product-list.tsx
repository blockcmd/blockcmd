import Link from "next/link";
import ProductCard from "@/components/product-card";

export default function ProductList() {
  const productData = [
    {
      id: 1,
      title: "Inspect",
      description: "Read/write to smart contracts and simulate transactions",
      url: "https://github.com/blockcmd/inspect"
    },
    {
      id: 2,
      title: "Scans",
      description: "Library to query all the block explorers",
      url: "https://github.com/blockcmd/scans"
    },
    {
      id: 3,
      title: "Commerce",
      description: "Pay, get paid in crypto and offramp",
      url: false
    },
    {
      id: 4,
      title: "Portfolio Manager",
      description: "Manage your crypto assets",
      url: false
    }
  ]

  return (
    <>
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">OSS Products</h2>
      <p className=" text-left leading-7 [&:not(:first-child)]:mt-6 ">BlockCMD firmly believes that open source software will change the world. We build and contribute to products that push the boundry of possiblity, even when there is no direct commercial incentive. Explore our products below.</p>
      <div className="flex flex-col gap-4 text-left">
        {
          productData.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              url={product.url}
            />
          ))
        }
      </div>

    </>
  )
}