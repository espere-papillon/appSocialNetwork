import React from "react";
import styles from "./Description.module.css"
import {Posts} from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Description = () => {
    return (
        <div>
            <ProfileInfo />
            <Posts />
        </div>
    )
}
