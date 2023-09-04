// 서버 컴포넌트, app 폴더 안에 있는 컴포넌트는 서버 컴포넌트이다.
// 서버 컴포넌트는 브라우저에서 실행되지 않는다.
// 서버 컴포넌트는 서버에서만 실행된다.
// 서버 컴포넌트는 브라우저에서 실행되지 않기 때문에 브라우저에서 사용하는 객체를 사용할 수 없다. e.g) 상태관리 등
import Counter from "@/components/Counter";
import Image from "next/image"; // 노드 APIs
export default function Home() {

    return (
        <>
            <h1>홈페이지!!</h1>
            <Counter/>
            {/* 이미지에서 외부 경로를 사용할 땐 width와 height를 사용하여야 한다. */}
            <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                   width={400} height={400}
                   alt="shop"/>
        </>

    );
}
