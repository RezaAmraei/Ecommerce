import React, { useState } from "react";
import { Dropdown } from "antd";
import Link from "next/link";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

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
  const [toggleArrow, setToggleArrow] = useState(true);
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
        trigger={["click"]}
        onOpenChange={() => setToggleArrow((prev) => !prev)}
      >
        <span className="logo dropdown">
          Filter Products{" "}
          {toggleArrow ? <CaretDownOutlined /> : <CaretUpOutlined />}
        </span>
      </Dropdown>
    </div>
  );
};

export default MobileNavbarLinks;
