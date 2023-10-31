import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";
import { getCart } from "@/lib/db/cart";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UserMenuButton from "./UserMenuButton";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const session = await getServerSession(authOptions)
  const cart = await getCart();

  return (
    <div className="bg-base-100">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            <Image src={logo} alt="HL Shopp logo" width={40} height={40} />
            HL Shopp
          </Link>
        </div>
        <div className="flex-none gap-2">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Buscar"
                className="min-w[100px]: input input-bordered w-full"
              />
            </div>
          </form>
          <ShoppingCartButton cart={cart} />
          <UserMenuButton session={session} />
        </div>
      </div>
    </div>
  );
}
