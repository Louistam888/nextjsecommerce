import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div
            className="max-w-md spa
          CLEARce-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to Murica
            </h2>
            <p className="text-neutral-600">
              Discover the latest products made in the USA
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Browse All Products
              </Link>
            </Button>
          </div>
          <Image
            alt="Banner Image"
            width={450}
            height={450}
            src={products.data[0].images[0]}
          />
        </div>
      </section>
      <section>
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
