import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "@/context/StateContext";
import { MobileNavbarLinks } from ".";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/" className="desktop-view">
          RA Headphones
        </Link>
        <Link href="/" className="mobile-view">
          RA
        </Link>
      </p>

      <div className="navbar-filter-container desktop-view">
        <Link href="/type/Shirts">
          <p className="navbar-link">Shirts</p>
        </Link>
        <Link href="/type/Jackets">
          <p className="navbar-link">Jackets</p>
        </Link>
        <Link href="/type/Sweats">
          <p className="navbar-link">Sweats</p>
        </Link>
        <Link href="/type/Shoes">
          <p className="navbar-link">Shoes</p>
        </Link>
        <Link href="/type/Accessories">
          <p className="navbar-link">Accessories</p>
        </Link>
      </div>
      {/* THIS COMPONENT WONT SHOW ON DESKTOP VIEW */}
      <MobileNavbarLinks />
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
