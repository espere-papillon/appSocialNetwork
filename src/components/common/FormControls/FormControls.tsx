import React from "react";
import styles from "./FormControls.module.css"

export const Element = (Element: string) => (props: any) => {
    const {
        input,
        meta,
        ...restProps
    } = props
    return (
        <div className={styles.formControls + " " + ((meta.touched && meta.error)? styles.error : "")}>
            <Element {...input} {...restProps}></Element>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}

