import React, {ChangeEvent, useState} from "react";
import styles from "../Description.module.css";
import {ContactsUserType, ProfileUserType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userImg from "../../../img/user.jpg";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileDataFormReduxForm} from "./ProfileDataForm";

type dataPropsType = {
    profileUser: ProfileUserType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: any) => void
}

export function ProfileInfo(props: dataPropsType) {
    const [editMode, setEdtMode] = useState(false)

    if (!props.profileUser) {
        return <Preloader />
    }

    const onProfilePhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
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
                <img src={props.profileUser.photos?.large || userImg} alt={"ava"}/>
                {props.isOwner && <input type={'file'} onChange={onProfilePhotoSelected} />}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                {!editMode && <ProfileBlock profileUser={props.profileUser} isOwner={props.isOwner} setEditMode={setEdtMode} />}
                {editMode && <ProfileDataFormReduxForm />}
            </div>
        </div>
    )
}

type ContactInfoTypeProps = {
    contactKey: string
    contactInfo: string | null
}

const ContactInfo: React.FC<ContactInfoTypeProps> = (props) => {
    return <div className={styles.contact}><b>{props.contactKey}: </b>{props.contactInfo}</div>
}

const ProfileBlock = (props: {profileUser: ProfileUserType, isOwner: boolean, setEditMode: (editMode: boolean) => void}) => {
    return(
        <>
            {props.isOwner && <button onClick={() => props.setEditMode(true)}>Edit</button>}
            <div>
                {props.profileUser.aboutMe}
            </div>
            {props.profileUser.contacts && <div>{Object.keys(props.profileUser.contacts).map(key => {
                return <ContactInfo key={key} contactKey={key} contactInfo={props.profileUser.contacts[key as keyof ContactsUserType]}/>
            })}</div>}
            <div>
                <span>{"Looking for a job: "}</span>
                <input type={"checkbox"} checked={props.profileUser.lookingForAJob} disabled={true}/>
                <span>{props.profileUser.lookingForAJobDescription}</span>
            </div>
        </>
    )
}