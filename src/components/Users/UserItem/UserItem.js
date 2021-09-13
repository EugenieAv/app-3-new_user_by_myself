import React from "react";

import styles from './UserItem.module.css';

const UserItem = (props) => {
    return (
        <li className={styles.item} >
            {props.username} ({props.age} years old)
        </li>
    );
};

export default UserItem;