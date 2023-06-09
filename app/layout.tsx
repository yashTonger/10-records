import './globals.css'
import styles from './page.module.css'

export const metadata = {
  title: '10 records',
  description: 'Generated by yash tonger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.main}>
        <h1>10 Records from API - Yash Tonger</h1>
        {children}
      </body>
    </html>
  )
}
