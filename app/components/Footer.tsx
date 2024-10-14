import Link from 'next/link'
import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>Taha Saif</Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li><Link href="/" className={styles.navLink}>Home</Link></li>
              <li><Link href="/about" className={styles.navLink}>About</Link></li>
              <li><Link href="/services" className={styles.navLink}>Services</Link></li>
              <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Taha Saif. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}