import styles from "./style.module.css"
import { BoardModel } from "@/model/board.model";


interface LinkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  element : BoardModel
}


export function BoardElement({
  
  element
}: LinkButtonProps) {

  
    return (
        <div className={styles.element}>
            {element.isPrivate && (
              <span className={styles.icon} >🔒</span>
            )}
            {!element.isPrivate && (
              <span className={styles.icon} >🗂️</span>
           
            )}
            <p className={styles.label}>{element.label}</p>
        </div>
    )
}