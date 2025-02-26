import Link from "next/link";
import React from "react";
import ContainerLayout from "../../UI/ContainerLayout";

const BottomFooter = () => {
  return (
    <div style={{ backgroundColor: "#F8F8F8" }} className="py-4">
      <ContainerLayout>
        <div className="fs-12 d-flex justify-content-between">
          {" "}
          <p className="m-0">
            © 2024 - 2025 Birchwood University, LLC All Rights Reserved
          </p>
          <ul className="d-flex list-unstyled m-0 gap-3">
            <li>
              <Link href="/terms-of-use">Terms & Conditions</Link>
            </li>

            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default BottomFooter;
