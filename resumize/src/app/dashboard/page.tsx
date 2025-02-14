import { PremiumBand } from "@/ui/components/premium-band/premium-band";
import styles from "./page.module.css";
import { PersonalInfo } from "@/ui/components/personal-info/personal-info";
import Link from "next/link";

export default function Home(){
    return (
     <main className={styles.main} >
        <PremiumBand />   
        <PersonalInfo />

        <div className={styles.deleteContainer}>
            <h3>Delete account</h3>
            <p>If you delete your account you{"’"}ll be permanently removing it from our systems - you can{"’"}t undo it.</p>

            <span className={styles.deleteBtn}>Yes, Delete my account</span>
        </div>

        <div className={styles.footer}>
            <p className={styles.longText} ><span>Get in touch with our support</span> team if you have any question or want to leave some feedback.</p>
            <p className={styles.longText} >We{"’"}ll be happy to hear from you.</p>
            <br />
            <hr color="#E3E3E4" />
            <br />
            <div  className={styles.footerTerms}>
                <Link href="#">Terms & Conditions</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">FAQ</Link>
                <Link href="#">Contact Us</Link>
            </div>
        </div>
     </main>   
    )
}