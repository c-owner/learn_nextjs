import Link from "next/link";
import {getProducts} from "@/service/products";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";
import clothesImage from "../../../assets/images/clothes.jpg";

// export const revalidate = 3;
export default async function ProductsPage() {
    // throw new Error();

    // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
    const products = await getProducts();
    return (
        <>
            <h1>제품 소개 페이지</h1>
            {/* priority 속성은 Next.js에서 우선순위로 보여줄 이미지로 지정해줄 Property이다. */}
            <Image src={clothesImage} alt={"clothes"} priority />
            <ul>
                {products.map(({id, name}, index) => (
                    <li key={index}>
                        <Link href={`/products/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <MeowArticle/>
        </>
    );
}
