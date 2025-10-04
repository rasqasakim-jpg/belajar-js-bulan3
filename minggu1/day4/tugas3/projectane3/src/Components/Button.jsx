import styles from './Button.module.css';

export default function Button({ children, variant = 'Gak', onClick }) {
  const variantClass = variant === 'Acc' ? styles.gak : styles.acc;
  const className = `${styles.btn} ${variantClass}`;

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
