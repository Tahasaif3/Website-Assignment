'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            Taha Saif
          </Link>
          <div className={styles.desktopMenu}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/services" className={styles.navLink}>Services</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </div>
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </nav>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileNavLink}>Home</Link>
          <Link href="/about" className={styles.mobileNavLink}>About</Link>
          <Link href="/services" className={styles.mobileNavLink}>Services</Link>
          <Link href="/contact" className={styles.mobileNavLink}>Contact</Link>
        </div>
      )}
    </header>
  )
}