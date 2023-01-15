import Image from 'next/image'
import styles from '../../styles/Product.module.css'

const Product = () => {
  const product = {
    id: 'aaaaaaaaaaaaaaaaaaaaaaaa',
    name: 'Product Name',
    description: 'Lorem ipsum dolor ...',
    price: 13,
    category: 'appetizers',
    image: '/img/main_2.png',

  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product.image} alt={product.name} objectFit='contain' layout='fill' />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.name}</h1>
        <span className={styles.price}>{product.price} &euro;</span>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.add}>
          <input className={styles.quantity} type='number' defaultValue={1} min='1' />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product;