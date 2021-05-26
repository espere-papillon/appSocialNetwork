import React from "react";
import styles from "../Description.module.css";
import {ProfileUserType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userImg from "../../../img/user.jpg";

type dataPropsType = {
    profileUser: ProfileUserType | null
}

export function ProfileInfo(props: dataPropsType) {
    if (!props.profileUser) {
        return <Preloader />
    }
    return (
        <div>
            <div className={styles.description}>
                {/*<img className={styles.profilePhoto}*/}
                {/*     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97gU24eaD3S2Fer99w9GKOy9OOhTd5fCWZA&usqp=CAU"*/}
                {/*     alt="ava"/>*/}
            </div>
            <div className={styles.descriptionText}>
                <h2>{props.profileUser.fullName}</h2>
                <img src={props.profileUser.photos.large ? props.profileUser.photos.large : userImg} alt={"ava"}/>
                <div>
                    {props.profileUser.aboutMe}
                </div>
                <div>
                    <span>{` facebook: ${props.profileUser.contacts.facebook} `}</span>
                    <span>{` github: ${props.profileUser.contacts.github} `}</span>
                </div>
                <div>
                    <span>{"Looking for a job: "}</span>
                    <input type={"checkbox"} checked={props.profileUser.lookingForAJob} disabled={true}/>
                    <span>{props.profileUser.lookingForAJobDescription}</span>
                </div>

            </div>
        </div>
    )
}