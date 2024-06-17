import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex flex-col gap-4 max-w-3xl">
      <Image src="/inspect-banner.png" alt="Inspect banner" width={1200} height={250} />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-8">Inspect</h1>
      <p className="text-sm text-muted-foreground">Read and write to smart contracts</p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Interact smart contract functions</li>
        <li>Import ABI files or fetch from block explorers</li>
      </ul>
      <Button asChild className="w-fit">
        <a href="https://inspect.blockcmd.com">Open app</a>
      </Button>
    </div>
  )
}