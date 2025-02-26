/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "/styles/scss/main.scss";`,
    api: "modern-compiler", // or "modern"
  },
};

export default nextConfig;
