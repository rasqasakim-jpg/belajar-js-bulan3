import styles from "./AlertBox.module.css";

export default function AlertBox({ type = "default", message }) {
  let variantClass;

  switch (type) {
    case "success":
      variantClass = styles.success;
      break;
    case "warning":
      variantClass = styles.warning;
      break;
    case "error":
      variantClass = styles.error;
      break;
    default:
      variantClass = styles.default;
      break;
  }

  const className = `${styles.alert} ${variantClass}`;

  return <div className={className}>{message}</div>;
}
