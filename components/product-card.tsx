interface ProductCardProps {
  title: string;
  description: string;
  url: string | boolean;
}

export default function ProductCard({ title, description, url }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-2 pt-4">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="leading-7">{description}</p>
    </div>
  )
}