'use client'

import { useRouter } from 'next/navigation'
import Link from "next/link";
import styles from './header.module.css';

const header =()=>{
    const router = useRouter();
    return (
        <header>
            <nav className={styles.nav}>
                <li>
                    <Link href='/' className={`${styles.button} ${styles.font}`}>
                        <span>TOP</span>
                    </Link>
                </li>
                <li>
                    <Link href='/arrival' className={`${styles.button} ${styles.font}`}>
                        <span>現着報告</span>
                    </Link>
                </li>
                <li>
                    <Link href='/report' className={`${styles.button} ${styles.font}`}>
                        <span>定時連絡</span>
                    </Link>
                </li>
                <li>
                    <Link href='/comment' className={`${styles.button} ${styles.font}`}>
                        <span>ご意見・ご要望</span>
                    </Link>
                </li>
            </nav>
        </header>
    );
};
export default header;