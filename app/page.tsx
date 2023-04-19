import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      Press next =
      <div className={styles.grid}>
          <a
            href= {`/1`}
            className={styles.card}
          >
            <h2>
              Next <span>-&gt;</span>
            </h2>
            <p>
              Find the next 10 Records from API.
            </p>
          </a>
        </div>
    </main>
  )
}
