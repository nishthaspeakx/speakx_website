import Image from "next/image";
import type { Product } from "@/lib/types";

export default function ProductLogo({ product, size = 48, className = "" }: { product: Product; size?: number; className?: string }) {
  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-2xl bg-surface ring-1 ring-line ${className}`}
      style={{ width: size, height: size }}
    >
      <Image src={product.logo} alt={product.logoAlt} width={size} height={size} className="h-full w-full object-contain p-1.5" />
    </span>
  );
}
