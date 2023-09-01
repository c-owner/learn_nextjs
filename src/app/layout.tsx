import './globals.css'
import styles from './layout.module.css';
import type {Metadata} from 'next'
import Link from "next/link";

export const metadata: Metadata = {
    title: '멋진 제품 사이트',
    description: '제품을 소개하고 판매하는 사이트입니다.',
    icons: {
        icon: '/favicon.ico',

    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <header className={styles.header}>
            <h1><Link href="/">Demo Note</Link></h1>
            <nav className={styles.nav}>
                <Link href="/products">Products</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
        {children}
        </body>
        </html>
    )
}
