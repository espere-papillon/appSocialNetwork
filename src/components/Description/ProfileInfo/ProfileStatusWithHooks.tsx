import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {
    const [editMode, setEdtMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEdiMode = () => {
        setEdtMode(true)
    }

    const deactivateEdiMode = () => {
        setEdtMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <>
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateEdiMode}>{status ? status : '----'}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input type="text" onChange={onStatusChange} autoFocus={true} value={status}
                           onBlur={deactivateEdiMode}/>
                </div>
                }
            </div>
        </>
    )
}