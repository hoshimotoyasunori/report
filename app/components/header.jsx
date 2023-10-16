import Link from "next/link";
import styles from '../page.module.css';

const header =()=>{
    return (
        <>
            <div className={styles.description}>
                <li className={styles.title}>
                    <Link href='/'> ES</Link>
                </li>
                <div className={styles.nav}>
                    <li>
                        <Link href='/report' className={`${styles.button} ${styles.font}`}>定時連絡</Link>
                    </li>
                    <li>
                        <Link href='/arrival' className={`${styles.button} ${styles.font}`}>現着報告</Link>
                    </li>
                    <li>
                        <Link href='/comment' className={`${styles.button} ${styles.font}`}>ご意見・ご要望</Link>
                    </li>
                </div>
            </div>
        </>
    );
};
export default header;