import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    // <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card1}>
          <p>STEP 1</p>
          <h2>
            現着報告 <span>-&gt;</span>
          </h2>
          <p className={`${styles.button} ${styles.font}`}>現着到着時刻を報告してください。</p>
          {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfzwQar3vcxEA9u9eMweDUtzz5QG-rQe1MbK-mvK4YtWtcz2w/viewform?embedded=true" width="100%" height="auto" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe> */}
        </div>

        <div className={styles.card2}>
          <p>STEP 2</p>
          <h2>
            定時連絡 <span>-&gt;</span>
          </h2>
          <p className={`${styles.button} ${styles.font}`}>活動の結果報告時にご使用ください。</p>
          {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdkDiKDT9qqvjEIAMHxtmkI2BQMIsArx7Ph71LQVfIX1yJAuA/viewform?embedded=true" width="100%" height="auto" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe> */}
        
        </div>
      </div>
    // </main>
  )
}
