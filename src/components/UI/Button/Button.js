import React from "react";

import styles from './Button.module.css';

const Button = (props) => {
    return(
        <div className={styles["btn-submit"]} type={props.type}>
            {props.children}
        </div>
    );
};

export default Button;