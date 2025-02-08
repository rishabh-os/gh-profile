import withPWAInit from "@ducanh2912/next-pwa";
const withPWA = withPWAInit({
	dest: "public",
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === "development",
});
const nextConfig = withPWA({
	pageExtensions: ["ts", "tsx", "jsx", "md", "mdx"],
});

export default nextConfig;
