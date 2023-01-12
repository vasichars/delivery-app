import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Image src='/img/logo.png' alt='logo' width='300' height='150'/>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Appetizers</li>
          <li className={styles.listItem}>Drinks</li>
          <li className={styles.listItem}>Main Dishes</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src='/img/cart.svg' alt='cart' width='100' height='40' />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;