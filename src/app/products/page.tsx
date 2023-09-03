import Link from "next/link";
import {getProducts} from "@/service/products";
import styles from './page.module.css';

// export const revalidate = 3;
export default async function ProductsPage() {

    // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
    const products = await getProducts();
    const res = await fetch('https://meowfacts.herokuapp.com/', {
        // next: { revalidate: 0 }, // 0으로 설정 시 SSR, 숫자 입력 시 ISR
        // cache: 'no-store', // 캐시를 사용하지 않음: no-store,
        // 캐시를 지정하지 않으면 default로 force-cached 상태이기 때문에 영원히 SSG 상태
    });
    const data = await res.json();
    const factText = data.data[0];
    return (
        <>
            <h1>제품 소개 페이지</h1>
            <ul>
                {products.map(({id, name}, index) => (
                    <li key={index}>
                        <Link href={`/products/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <article className={styles.article}>{factText}</article>
        </>
    );
}
