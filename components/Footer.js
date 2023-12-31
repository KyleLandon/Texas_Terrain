import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo+text.png" alt="Texas Terrain Logo" className={styles.logo} />
        <p>Texas Terrain, LLC 2023</p>
      </footer>
    </>
  )
}
