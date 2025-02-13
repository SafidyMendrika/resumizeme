import Image from "next/image"
import styles from "./style.module.css"
import { LinkButton } from "../link-button/link-button"
import { List  } from "lucide-react"

export function AsideBar(){
    return (
        <aside className={styles.aside}>
            <header className={styles.header}>
                <Image 
                    src={"/icon.svg"}  
                    alt="icon"
                    width={32}  
                    height={32} 
                    />
                <p>ResumizeMe</p>
            </header>

            <LinkButton>
                <List
                    width={24}
                    height={24}
                    color="#484848"
                />
                <p  className={styles.btnlink}>My templates</p>
            </LinkButton>
            
        </aside>
    )
}