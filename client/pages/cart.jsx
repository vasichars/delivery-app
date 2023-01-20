import Image from 'next/image'
import styles from '../styles/Cart.module.css'

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image src='/img/main_2.png' alt='' layout='fill' objectFit='cover' />
                </div>
              </td>
              <td>
                <span className={styles.name}>Main 2</span>
              </td>
              <td>
                <span className={styles.price}>13 &euro;</span>
              </td>
              <td>
                <span className={styles.couantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>26 &euro;</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b> 26.00 &euro;
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b> 0.00 &euro;
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b> 26.00 &euro;
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  )
}

export default Cart;