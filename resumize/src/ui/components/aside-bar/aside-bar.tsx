import Image from "next/image"
import styles from "./style.module.css"
import { LinkButton } from "../link-button/link-button"
import { SearchSection } from "../search-section/search-section"
import { BoardSection } from "../board-section/board-section"

export function AsideBar(){
    return (
        <aside className={styles.aside}>
            <div>

                <header className={styles.header}>
                    <Image 
                        src={"/icon.svg"}  
                        alt="icon"
                        width={20}  
                        height={24} 
                        />
                    <p>Resumizeme</p>
                </header>

                <LinkButton>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.04063 1.59693C1.01399 1.72713 1 1.86193 1 2V14C1 15.1046 1.89543 16 3 16H13C14.1046 16 15 15.1046 15 14V2C15 0.895431 14.1046 0 13 0H3C2.0335 0 1.22713 0.685564 1.04063 1.59693ZM3 2H13V14H3V2ZM7 6H5V4H7V6ZM8 6H11V5H8V6ZM11 7V8H5V7H11ZM11 10V9H5V10H11ZM9 11V12H5V11H9Z" fill="#4C4C55"/>
                    </svg>

                    <p  className={styles.btnlink}>My templates</p>
                </LinkButton>
                <SearchSection />
                <BoardSection />

            </div>
            <div className={styles.footer} >
                <div className={styles.footerLabel}>
                    <Image 
                        src="https://www.galeriephotographe.com/wp-content/uploads/2020/04/shootings-photo-de-profil-reseaux-sociaux-et-professionnel-a-colmar_018.jpg"
                        width={32}
                        height={32}
                        alt="carla"
                        className={styles.footerImage}
                         />

                    <span>Carla</span>

                </div>

                <button className={styles.paramButton} >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_5602_500)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 9.00002L5.01355e-05 7.00003L1.71216 6.42932C2.05585 6.31476 2.31702 6.0357 2.45584 5.70108C2.59467 5.36644 2.60519 4.98882 2.44317 4.66477L1.63593 3.05031L3.05018 1.63614L4.66439 2.44324C4.98851 2.6053 5.36622 2.59477 5.70093 2.4559C6.03561 2.31704 6.31472 2.05583 6.4293 1.71208L6.99998 0L8.99998 4.95036e-05L9.57064 1.71203C9.68522 2.05578 9.96434 2.317 10.299 2.45586C10.6338 2.59472 11.0115 2.60525 11.3356 2.44319L12.9498 1.63607L14.364 3.05031L13.5569 4.66455C13.3948 4.98865 13.4053 5.36632 13.5442 5.70102C13.683 6.03568 13.9443 6.31478 14.288 6.42936L16 7.00003L16 9.00003L14.2881 9.57067C13.9443 9.68526 13.683 9.9644 13.5442 10.2991C13.4053 10.6339 13.3948 11.0116 13.5568 11.3357L14.3639 12.9499L12.9497 14.3641L11.3354 13.5569C11.0113 13.3949 10.6336 13.4054 10.299 13.5442C9.96433 13.6831 9.68525 13.9443 9.57068 14.288L8.99997 16.0001L6.99998 16L6.42926 14.2879C6.3147 13.9442 6.03563 13.683 5.701 13.5442C5.36633 13.4053 4.98868 13.3948 4.66461 13.5569L3.05024 14.3641L1.63606 12.9498L2.4432 11.3355C2.60525 11.0114 2.59472 10.6337 2.45587 10.2991C2.31702 9.96439 2.05581 9.68529 1.71208 9.57071L0 9.00002ZM8.00003 5.00003C6.34189 5.00003 5.00003 6.34189 5.00003 8.00003C5.00003 9.65818 6.34189 11 8.00003 11C9.65818 11 11 9.65818 11 8.00003C11 6.34189 9.65818 5.00003 8.00003 5.00003Z" fill="#4C4C55"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_5602_500">
                                <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>

            </div>
        </aside>
    )
}