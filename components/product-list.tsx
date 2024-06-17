import Link from "next/link";
import ProductCard from "@/components/product-card";

export default function ProductList() {
  const productData = [
    {
      id: 1,
      title: "Inspect",
      description: "Read and write to smart contracts",
      url: "/inspect"
    },
    {
      id: 2,
      title: "Scans",
      description: "Library to query all the block explorers",
      url: "/scans"
    },
    {
      id: 3,
      title: "Commerce",
      description: "Pay, get paid in crypto and offramp",
      url: "/commerce"
    },
    {
      id: 4,
      title: "Portfolio Manager",
      description: "Manage your crypto assets",
      url: "/portfolio-manager"
    }
  ]

  return (
    <>
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">OSS Products</h2>
      <div className="text-left">
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