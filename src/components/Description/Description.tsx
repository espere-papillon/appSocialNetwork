import React from "react";
import styles from "./Description.module.css"
import {Posts} from "./Posts/Posts";

export const Description = () => {
    return (
        <div>
            <div className={styles.description}>
                <img className={styles.profilePhoto}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97gU24eaD3S2Fer99w9GKOy9OOhTd5fCWZA&usqp=CAU"
                    alt="ava"/>
            </div>
            <div>
                Description
            </div>
            <Posts />
        </div>
    )
}
