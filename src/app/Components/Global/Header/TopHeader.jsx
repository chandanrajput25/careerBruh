"use client";
import React from "react";
import ContainerLayout from "../../UI/ContainerLayout";
import Link from "next/link";
import { ArrowRight, Envelope, Telephone } from "react-bootstrap-icons";
import SocialShare from "../SocialShare/SocialShare";
import { useState } from "@hookstate/core";
import store from "@/app/utils/store";

const TopHeader = () => {
  const { tollFree } = useState(store);

  return (
    <div className="bg-primary">
      <ContainerLayout>
        <div className="py-3 d-flex justify-content-between">
          {" "}
          <ul className="list-unstyled d-flex gap-3 m-0 text-white fs-12">
            <li>
              <Link
                href={`tel:${tollFree.get()}`}
                className="d-flex align-items-center gap-1 lhw"
              >
                <Telephone size={15} color="white" /> {tollFree.get()}
              </Link>
            </li>
            <li>
              <Link
                href="mailTo:info@birchwoodu.org"
                className="d-flex align-items-center gap-1 lhw"
              >
                <Envelope size={15} color="white" /> info@birchwoodu.org
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            {" "}
            <SocialShare color="#fff" />
            <span className="text-white">|</span>
            <ul className="list-unstyled d-flex gap-3 m-0 text-white text-uppercase fs-12">
             
              <li>
                <Link href="/academic-calendar" className="lhw">
                 List as Mentor
                </Link>
              </li>
              <li>
                <Link
                  href="/application"
                  className="d-flex align-items-center gap-1 lhw"
                >
                  Apply <ArrowRight size={15} color="white" />{" "}
                </Link>
              </li>
            </ul>{" "}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default TopHeader;
