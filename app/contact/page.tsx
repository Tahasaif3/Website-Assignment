import styles from '../../styles/contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.content}>
        We&apos;d love to hear from you. Please fill out the form below or use our contact information to get in touch.
      </p>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input type="text" id="name" name="name" required className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input type="email" id="email" name="email" required className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message:</label>
          <textarea id="message" name="message" required className={styles.textarea}></textarea>
        </div>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
      <div className={styles.contactInfo}>
        <h2 className={styles.subtitle}>Contact Information</h2>
        <p>Email: tahasaif454@gmail.com</p>
        <p>Phone: (92) 316-3836-744</p>
        <p>Address: Alamdar Chowk, Hashim Galleria, 3rd floor, Flat 27, Qasimabad, Hyderabad</p>
      </div>
    </div>
  )
}
