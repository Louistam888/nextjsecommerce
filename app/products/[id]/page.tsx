import { stripe } from "@/lib/stripe";
import { ProductDetail } from "@/components/ui/product-detail";

export default async function ProductPage(
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  return <ProductDetail product={product} />;
}

