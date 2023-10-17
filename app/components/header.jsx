'use client'

import { useRouter } from 'next/navigation'
// import Link from "next/link";
import styles from './header.module.css';

const header =()=>{
    const router = useRouter();
    return (
        <header>
            <nav className={styles.nav}>
                <button className={`${styles.button} ${styles.font}`} onClick={()=>router.push("/")}>Top</button>
                <button className={`${styles.button} ${styles.font}`} onClick={()=>router.push("/arrival")}>現着報告</button>
                <button className={`${styles.button} ${styles.font}`} onClick={()=>router.push("/report")}>定時連絡</button>
                <button className={`${styles.button} ${styles.font}`} onClick={()=>router.push("/comment")}>ご意見・ご要望</button>
            </nav>
        </header>
    );
};
export default header;