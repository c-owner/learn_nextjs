'use client';
import styles from './MeowArticle.module.css';
import {useEffect, useState} from "react";

export default function MeowArticle() {
    const [text, setText] = useState(''); // [상태, 상태를 바꿀 수 있는 함수

    // useEffect를 사용하기 때문에 비동기 Promise 처리로 진행
    useEffect(() => {
        fetch('https://meowfacts.herokuapp.com/', {
            next: {revalidate: 0}, // 0으로 설정 시 SSR, 숫자 입력 시 ISR
            // cache: 'no-store', // 캐시를 사용하지 않음: no-store,
            // 캐시를 지정하지 않으면 default로 force-cached 상태이기 때문에 영원히 SSG 상태
        }).then((res) => res.json()).then((data) => {
            setText(data.data[0]);
        });
    }, []); // 실행하고 최초 1회를 하기 위해 빈 배열을 넣음

    return <article className={styles.article}>{text}</article>;
}