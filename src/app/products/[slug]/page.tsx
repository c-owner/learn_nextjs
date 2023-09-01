type Props = {
    params: {
        slug: string;
    };
};

export default function PantsPage({params}: Props) {
    return <h2>{params.slug} 제품 설명 페이지</h2>;
}

export function generateStaticParams() {
    const products = ['pants', 'skirt'];
    return products.map(product => ({
        slug: product,
    }));
}