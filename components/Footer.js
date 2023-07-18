import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo+text.png" alt="Texas Terrain Logo" className={styles.logo} />
      </footer>
    </>
  )
}
