import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
      <div className={styles.grid}>
        <li>
          <Link href='/report' className={`${styles.card} ${styles.card1}`}>
            <span>STEP 1
              <h2>現着報告 <span>-&gt;</span></h2>
              <p>現着到着時刻を報告してください。</p>
            </span>
          </Link>
        </li>
        <li>
          <Link href='/arrival' className={`${styles.card} ${styles.card2}`}>
            <span>STEP 2
              <h2>定時連絡 <span>-&gt;</span></h2>
              <p>活動の結果報告時にご使用ください。</p>
            </span>
          </Link>
        </li>
      </div>
  )
}
