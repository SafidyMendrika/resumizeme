import { SearchModel } from "@/model/search.model";
import styles from "./style.module.css"


interface LinkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  element : SearchModel
}


export function ResumeSearch({
  
  element
}: LinkButtonProps) {

  
    return (
        <div className={styles.element}>
            {element.type === "new" && (
              <span className={styles.star} >⭐</span>
            )}
            {element.type === "old" && (
              <svg className={styles.star} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="14" height="14" fill="white"/>
              <g clipPath="url(#clip0_5602_370)">
              <path d="M7.00006 3.10229V7.00002H10.8978" stroke="#4C4C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.00006 13.125C10.3828 13.125 13.1251 10.3827 13.1251 7C13.1251 3.61726 10.3828 0.875 7.00006 0.875C3.61732 0.875 0.875061 3.61726 0.875061 7C0.875061 10.3827 3.61732 13.125 7.00006 13.125Z" stroke="#4C4C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_5602_370">
              <rect width="14" height="14" fill="white"/>
              </clipPath>
              </defs>
              </svg>              
            )}
            <p className={styles.label}>{element.label}</p>
        </div>
    )
}