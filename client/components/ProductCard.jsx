import Image from 'next/image'
import styles from '../styles/ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src='/img/main_2.png' alt='' width='300' height='300' />
      <h1 className={styles.title}>Main Dish</h1>
      <span className={styles.price}>15€</span>
      <p className={styles.desc}>
        Lorem ipsum dolor.
      </p>
    </div>
  )
}

export default ProductCard;