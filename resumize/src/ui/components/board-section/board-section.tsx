"use client"

import styles from "./style.module.css"
import { BoardModel } from "@/model/board.model"
import { BoardElement } from "../board-element/board-element"
import { useState } from "react"

export function BoardSection(){
    const [boards ,setBoard]  = useState([
        {label : "Board 1",isPrivate : false},
        {label : "Board 2",isPrivate : false},
        {label : "Board 3",isPrivate : false},
        {label : "Board agent 1",isPrivate : true},
        {label : "Board agent 2",isPrivate : true},
        {label : "Board agent 3",isPrivate : true},
    ])

    const addBoard = ()=>{
        setBoard([...boards,{label : "New Board "+boards.length,isPrivate : true}])
    }
    return (
        <section className={styles.section} >
            <div className={styles.title}>
                <div>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.0406328 1.59693C0.0139911 1.72713 0 1.86193 0 2V14C0 15.1046 0.895431 16 2 16H12C13.1046 16 14 15.1046 14 14V2C14 0.895431 13.1046 0 12 0H2C1.0335 0 0.227125 0.685564 0.0406328 1.59693ZM2 2H12V7H2V2ZM2 9V14H12V9H2ZM5 5H9V4H5V5ZM9 12H5V11H9V12Z" fill="#4C4C55"/>
                    </svg>

                    <p>My boards</p>
                </div>

                <button className={styles.titleBtn} onClick={addBoard}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#C4C4C7"/>
                        <path d="M9 7V4H7L7 7H4V9H7L7 12H9V9H12V7H9Z" fill="#A1A1A5"/>
                    </svg>

                </button>
            </div>

            {boards.map((element,index) =>(
                <BoardElement element={element} key={index} />
            ))}
            
        </section>
    )
}