import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  url: string;
}

export default function ProductCard({ title, description, url }: ProductCardProps) {
  return (
    <Link href={url}>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="leading-7">{description}</p>
        </div>
      </div>
    </Link>
  )
}