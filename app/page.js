import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      {/* header */}
        <p>
          ES Report
        </p>
        <div className={styles.nav}>
          <div>
            <button className={styles.button}>定時連絡</button>
          </div>
          <div>
            <button className={styles.button}>現着報告</button>
          </div>
          <div>
            <button className={styles.button}>ご意見・ご要望</button>
          </div>
        </div>
      {/* footer */}
        {/* <div>
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
        </div> */}
      </div>


{/* mainろご */}
      {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
{/* main */}
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdkDiKDT9qqvjEIAMHxtmkI2BQMIsArx7Ph71LQVfIX1yJAuA/viewform?embedded=true" width="640" height="804" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
          <p>Find in-depth information about Next.js features and API.</p>
        </div>

        <div className={styles.card}>
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfzwQar3vcxEA9u9eMweDUtzz5QG-rQe1MbK-mvK4YtWtcz2w/viewform?embedded=true" width="640" height="777" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </div>
      </div>
    </main>
  )
}