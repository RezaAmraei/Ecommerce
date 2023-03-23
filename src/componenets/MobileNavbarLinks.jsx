import React from "react";
import { Dropdown } from "antd";
import Link from "next/link";

const items = [
  {
    key: "1",
    label: <Link href="/type/Shirts">Shirts</Link>,
  },
  {
    key: "2",
    label: <Link href="/type/Jackets">Jackets</Link>,
  },
  {
    key: "3",
    label: <Link href="/type/Sweats">Sweats</Link>,
  },
  {
    key: "4",
    label: <Link href="/type/Shoes">Shoes</Link>,
  },
  {
    key: "5",
    label: <Link href="/type/Accessories">Accessories</Link>,
  },
];

const MobileNavbarLinks = () => {
  return (
    <div className="mobile-links-wrapper mobile-view">
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
        arrow={{
          pointAtCenter: true,
        }}
      >
        <span className="logo dropdown">Filter Products</span>
      </Dropdown>
    </div>
  );
};

export default MobileNavbarLinks;

<Dropdown
  menu={{
    items,
  }}
  placement="bottom"
  arrow={{
    pointAtCenter: true,
  }}
>
  <span>Filter Products</span>
</Dropdown>;

<div className="mobile-links-container">
  <span className="logo filter-button">Filter Products</span>
</div>;
