// 서버 컴포넌트, app 폴더 안에 있는 컴포넌트는 서버 컴포넌트이다.
// 서버 컴포넌트는 브라우저에서 실행되지 않는다.
// 서버 컴포넌트는 서버에서만 실행된다.
// 서버 컴포넌트는 브라우저에서 실행되지 않기 때문에 브라우저에서 사용하는 객체를 사용할 수 없다. e.g) 상태관리 등
import os from 'os';
import Counter from "@/components/Counter"; // 노드 APIs
export default function Home() {
    console.log("안녕");
    console.log(os.hostname());

    return (
        <>
            <h1>홈페이지</h1>
            <Counter />
        </>

    );
}
