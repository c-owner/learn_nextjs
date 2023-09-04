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
    // 페이지가 경로가 바뀌면서 실 사용자 및 검색엔진 등 혼란스럽지 않도록 이동시킨다.
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
    },
    // 복잡한 URL을 다른것으로 대체하거나 덮어씌우는 용도 및 프로젝트 구조 노출을 방지함
    async rewrites() {
        return [
            {
                source: '/main',
                destination: '/',
            },
            {
                source: '/items/:slug',
                destination: '/products/:slug',
            }
        ]

    }
}

module.exports = nextConfig
