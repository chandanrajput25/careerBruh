import Image from "next/image";
import React from "react";

const TestiminialCard = ({ myData }) => {
    return (
        <>
            {myData.map((data, index) => (
                <div
                    key={index}
                    className="shadow-sm p-4 my-2 mx-3 text-center"
                    style={{ borderRadius: "0.75rem", border: "1px solid #e2e8f0" }}
                >
                    <Image
                        src={data.img}
                        width={70}
                        height={70}
                        alt="Testimonial"
                        objectFit="contain"
                        className="rounded-circle bg-dark"
                    />
                    <p className="mt-3 mb-0 fs-14">{data.name}</p>
                    <p className="fs-12 text-primary m-0">{data.designation}</p>
                </div>
            ))}
        </>
    );
};

export default TestiminialCard;
