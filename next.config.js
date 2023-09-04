/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "http",
                hostname: "localhost"
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/products/deleted_forever',
                destination: '/products',
                permanent: true, // 이 경로는 영원히 옮겨갔다,
                // Search Engine에게 308 status code를 보내주면서 안심하고 캐시해도 사용자가 이페이지를 오더라도 옮겨진 페이지로 보내줘도 된다는 의미
            },
            {
                source: '/products/deleted_temp',
                destination: '/products',
                permanent: false,
            }
        ]
    }
}

module.exports = nextConfig
