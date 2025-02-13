import styles from "./style.module.css"

export function LinkButton({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <button  className={styles.button}>
            {children}
        </button>
    )
}