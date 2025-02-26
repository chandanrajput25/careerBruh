import React from "react";
import WhatWeDoMobile from "./WhatWeDoMobile";
import WhatWeDoDesktop from "./WhatWeDoDesktop";


const WhatWeDo = ({ size }) => {
  const We_do = [
    {
      title: "100% Unbiased Platform",
      description:
        " No sales or marketing partnerships with insurers, helps us remain 100% unbiased and independent.",
    },
    {
      title: "All online plans analyzed.",
      description:
        " Widest research in the country covering every plan worth your attention.",
    },
    {
      title: "Consult Real Experts",
      description:
        " 5+ years of claims experience, qualified, handpicked after rigorous evaluations.",
    },
    {
      title: "Personalized Claims Service",
      description:
        " Every expert picked is in the profession of actively assisting you on everything, especially claims. Forever.",
    },
  ];
  const Other_do = [
    {
      title: "Distributor Platforms",
      description:
        " Distribution platforms earn commission and marketing fee from Insurers.",
    },
    {
      title: "Limited Plans covered",
      description: " Restricted by partnerships signed with Insurers.",
    },
    {
      title: "Deal with Call centers",
      description:
        " Trained for 2 weeks. Not career professionals. Zero experience in health insurance claims.",
    },
    {
      title: "Cold Toll-free Service",
      description:
        " Cold, transactional, zero stakes on whether your claim is settled or not.",
    },
  ];
  return (
    <div className=" mb-5" style={{ backgroundColor:"#f8f9f9"}}>
      {size && size.width < 768 ? (
        <WhatWeDoMobile We_do={We_do} Other_do={Other_do} />
      ) : (
        <WhatWeDoDesktop We_do={We_do} Other_do={Other_do} />
      )}
    </div>
  );
};

export default WhatWeDo;
