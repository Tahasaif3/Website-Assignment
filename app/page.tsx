import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}