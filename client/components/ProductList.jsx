import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default ProductList;