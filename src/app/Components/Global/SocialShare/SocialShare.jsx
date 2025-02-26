import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Linkedin, TwitterX } from "react-bootstrap-icons";

const SocialShare = ({ color }) => {
  const iconColor = color;

  const socialMediaLinks = [
    {
      icon: <Facebook size={15} color={iconColor} />,
      href: "https://www.facebook.com/birchwooduniversity/",
      title: "Facebook",
    },
    {
      icon: <Instagram size={15} color={iconColor} />,
      href: "https://www.instagram.com/birchwooduniversity/",
      title: "Instagram",
    },
    {
      icon: <TwitterX size={15} color={iconColor} />,
      href: "https://www.facebook.com/birchwooduniversity/",
      title: "Twitter",
    },
    {
      icon: <Linkedin size={15} color={iconColor} />,
      href: "https://www.facebook.com/birchwooduniversity/",
      title: "LinkedIn",
    },
  ];

  return (
    <ul className="list-unstyled d-flex gap-3 align-items-center m-0">
      {socialMediaLinks.map((data, index) => (
        <li key={index}>
          <Link href={data.href} title={data.title}>
            {data.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialShare;
