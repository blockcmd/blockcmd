import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function ProductList() {

  return (
    <>
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">OSS Products</h2>
      <p className=" text-left leading-7 [&:not(:first-child)]:mt-6 ">BlockCMD firmly believes that open source software will change the world. We build and contribute to products that push the boundry of possiblity, even when there is no direct commercial incentive. Explore our products below.</p>
      <div className="flex flex-col gap-4 text-left divide-y-2 divide-primary">
        <div className="flex flex-col gap-2 pt-4">
          <a target="_blank" className="text-blue-600 w-fit" href="https://github.com/blockcmd/inspect">
            <h3 className="flex flex-row  items-centerscroll-m-20 text-xl font-semibold tracking-tight">Inspect <span><ExternalLink className="ml-2 w-6 h-6"/></span></h3>
          </a>
          <p className="leading-7">Read/write to smart contracts and simulate transactions</p>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Scans</h3>
          <div className="flex flex-row gap-8">
            <a href="https://github.com/blockcmd/scans-ts" target="_blank" className="text-blue-600 flex flex-row gap-2 w-fit leading-7"><Image src="/typescript.svg" alt="typescript" width={20} height={20} />TypeScript<span><ExternalLink className="w-6 h-6"/></span></a>
            <a href="https://github.com/blockcmd/scans-py" target="_blank" className="text-blue-600 flex flex-row gap-2 w-fit leading-7"><Image src="/python.svg" alt="python" width={20} height={20} />Python<span><ExternalLink className="w-6 h-6"/></span></a>
            <a href="https://github.com/blockcmd/scans-rs" target="_blank" className="text-blue-600 flex flex-row gap-2 w-fit leading-7"><Image src="/rust.svg" alt="rust" width={20} height={20} />Rust<span><ExternalLink className="w-6 h-6"/></span></a>
          </div>
          <p className="leading-7">Library to query all the block explorers</p>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <div className="flex flex-row gap-2 items-center">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Commerce</h3>
            <p className="bg-muted-foreground w-fit text-secondary px-2 py-0 rounded-md">coming soon</p>
          </div>
          <p className="leading-7">Pay, get paid in crypto and offramp</p>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <div className="flex flex-row gap-2 items-center">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Portfolio Manager</h3>
            <p className="bg-muted-foreground w-fit text-secondary px-2 py-0 rounded-md">coming soon</p>
          </div>
          <p className="leading-7">Manage your crypto assets on multiple chains</p>
        </div>
      </div>

    </>
  )
}