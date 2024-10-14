import Image from 'next/image';
import styles from '../../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hello, I am Taha Saif</h1>
          <p className={styles.subtitle}>
            I am a passionate and dedicated web developer specializing in creating dynamic, responsive, and user-friendly web applications. With expertise in TypeScript, JavaScript, and modern web frameworks, I bring your ideas to life with clean code and innovative designs.
          </p>
          <button className={styles.btn}>Get Started</button>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src="/profile.png" 
            alt="Taha Saif" 
            width={600} 
            height={400} 
            className={styles.image} 
            priority 
          />
        </div>
      </div>
    </section>
  )
}
