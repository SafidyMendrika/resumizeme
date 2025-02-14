import { SearchModel } from "@/model/search.model"
import styles from "./style.module.css"
import { ResumeSearch } from "../resume-search/resume-search"

export function SearchSection(){
    const result : SearchModel[] = [
        {label : "Software Engineer",type : "new"},
        {label : "Computer hardware engineer",type : "new"},
        {label : "Network Engineer",type : "new"},
        {label : "Technical Support",type : "new"},
        {label : "Network administrator",type : "new"},
        {label : "Management",type : "new"},
        {label : "Data analysis",type : "new"},
        {label : "Computer technician",type : "new"},
        {label : "Past search 1",type : "old"},
        {label : "Past search 2",type : "old"},
        {label : "Computers and information...",type : "old"},
        {label : "Database Administrator",type : "old"},
        {label : "Computer security",type : "old"},
        {label : "Computer Systems Analyst",type : "old"},
    ]
    return (
        <section >
            <div className={styles.searchBar}>
                <button className={styles.searchBtn}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_5590_297)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 0C10.0899 0 13 2.91015 13 6.5C13 7.93484 12.5351 9.2611 11.7477 10.3363L15.2932 13.8818C15.6837 14.2723 15.6837 14.9055 15.2932 15.296C14.9026 15.6866 14.2695 15.6866 13.8789 15.296L10.333 11.7501C9.25837 12.536 7.93336 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0ZM6.5 2C8.98528 2 11 4.01472 11 6.5C11 8.98528 8.98528 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2Z" fill="#4C4C55"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_5590_297">
                                <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>


                <input type="text" placeholder="Search" className={styles.searchInput} />
            </div>

            {result.map((element,index) =>(
                <ResumeSearch element={element} key={index} />
            ))}
            
        </section>
    )
}