import { useState } from "react";
import styles from "./style.module.css"
import { BoardModel } from "@/model/board.model";


interface LinkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  element : BoardModel,
  updateBoardLabel: (newLabel: string) => void; 
}


export function BoardElement({
  
  element,
  updateBoardLabel 
}: LinkButtonProps) {

    const [changeName,setChangeName] = useState(false);

    const toggleChangeName = ()=>{
      setChangeName(!changeName);
    }
    const handleChange = ( e: React.ChangeEvent<HTMLInputElement>)=>{
      updateBoardLabel(e.target.value);
    }
    return (
        <div className={styles.element} onDoubleClick={toggleChangeName}>
            {element.isPrivate && (
              <span className={styles.icon} >🔒</span>
            )}
            {!element.isPrivate && (
              <span className={styles.icon} >🗂️</span>
           
            )}
            {changeName && (
              <input type="text" value={element.label} autoFocus onBlur={toggleChangeName} onChange={handleChange}/>
            )}
            {!changeName && (
              <p className={styles.label}>{element.label}</p>
            )}
            
        </div>
    )
}