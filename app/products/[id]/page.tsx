import { stripe } from "@/lib/stripe";
import { ProductDetail } from "@/components/ui/product-detail";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params; 

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  // Serialize Stripe object to plain JSON
  const plainProduct = JSON.parse(JSON.stringify(product));

  return <ProductDetail product={plainProduct} />;
}

