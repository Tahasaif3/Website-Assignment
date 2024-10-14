import styles from '../../styles/services.module.css'

export default function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      <p className={styles.content}>
        I offer a wide range of services to meet your needs. see my services below:
      </p>
      <div className={styles.servicesList}>
        <div className={styles.serviceItem}>
          <h2 className={styles.serviceTitle}>Web Development</h2>
          <p className={styles.serviceDescription}>
            Custom website design and development tailored to your business needs.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <h2 className={styles.serviceTitle}>Mobile App Development</h2>
          <p className={styles.serviceDescription}>
            Create powerful and user-friendly mobile applications for iOS and Android.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <h2 className={styles.serviceTitle}>UI/UX Design</h2>
          <p className={styles.serviceDescription}>
            Design intuitive and visually appealing user interfaces for web and mobile.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <h2 className={styles.serviceTitle}>Cloud Solutions</h2>
          <p className={styles.serviceDescription}>
            Implement and manage cloud-based solutions to improve your business efficiency.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <h2 className={styles.serviceTitle}>Graphic Design</h2>
          <p className={styles.serviceDescription}>
            Custom Graphic Design For your Needs to improve your website branding.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <h2 className={styles.serviceTitle}>Website Redesign</h2>
          <p className={styles.serviceDescription}>
            i will redesign your website and make it even more better UI.
          </p>
        </div>
      </div>
    </div>
  )
}