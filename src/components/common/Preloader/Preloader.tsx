import preloader from "../../../img/preloader.svg"
import React from "react";

export const Preloader: React.FC = props => {
    return (
        <div>
            <img src={preloader} alt={"#"}/>
        </div>
    )
}