import Link from "next/link";

export const NavBar = () => {
  return (
    <nav>
      <div>
        <Link href="/">My Ecommerce</Link>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/checkout">Checkout</Link>
      </div>
      <div></div>
    </nav>
  );
};
