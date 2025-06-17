import type { IProductCard } from '../../types';
import styles from './ productCard.module.css';

export function ProductCard(props: IProductCard) {
     const formatPrice = (amount: number, currency: string) => {
          const value = amount / 100;
          return new Intl.NumberFormat('ru-RU', {
               style: 'currency',
               currency: currency,
               minimumFractionDigits: 2,
          }).format(value);
     };

     const { title, origin, price, imageUrl } = props;

     return (
          <div className={styles.container}>
               <img src={imageUrl} alt={title} />
               <h2>{props.title}</h2>
               <p className={styles.description}>Происхождение: {origin}</p>
               <p className={styles.description}>
                    Цена: {formatPrice(price.amount, price.currency)}
               </p>
          </div>
     );
}
