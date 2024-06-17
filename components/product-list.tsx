import Link from "next/link";

export default function ProductList() {
  const productData = [
    {
      id: 1,
      title: "Inspect",
      description: "Read and write to smart contracts",
      image: "/bcmd-inspect.png",
      url: "/inspect"
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
    <div>
      <h1>OSS Products</h1>

    </div>
  )
}