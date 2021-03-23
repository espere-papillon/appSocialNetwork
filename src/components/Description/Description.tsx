import React from "react";
import styles from "./Description.module.css"

export const Description = () => {
    return (
        <div>
            <div>
                <img className={"profile-photo"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97gU24eaD3S2Fer99w9GKOy9OOhTd5fCWZA&usqp=CAU"
                    alt="ava"/>
                {/*<img*/}
                {/*    src="../img/dragon.png"*/}
                {/*    alt="ava"/>*/}
            </div>
            <div>
                Description
            </div>
        </div>
    )
}
