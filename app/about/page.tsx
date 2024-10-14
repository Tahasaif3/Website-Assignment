import styles from '../../styles/about.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.content}>
        Hi! I’m Muhammad Taha Saif, a passionate web developer with expertise in creating sleek, responsive, and interactive web applications. I specialize in building applications using modern technologies like Next.js, TypeScript, and Tailwind CSS. My goal is to transform innovative ideas into robust digital solutions that drive results and deliver a seamless user experience.
      </p>
      <section className={styles.mission}>
        <h2 className={styles.subtitle}>My Aim</h2>
        <p className={styles.content}>
          My aim is to continually grow as a developer by building projects that challenge and enhance my skills, while also contributing to the web development community by sharing my knowledge and experiences.
        </p>
      </section>
      <section className={styles.values}>
        <h2 className={styles.subtitle}>My Skills</h2>
        <ul className={styles.list}>
          <li>Innovation in every project</li>
          <li>Commitment to integrity and quality</li>
          <li>Continuous learning and growth</li>
          <li>Delivering excellence and value</li>
        </ul>
      </section>
    </div>
  )
}
