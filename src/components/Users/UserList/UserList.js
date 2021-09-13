import React from 'react';
import UserItem from '../UserItem/UserItem';

import styles from './UserList.module.css';

const UserList = (props) => {
    return(
        <ul className={styles.list} >
            {props.users.map((user) => 
                <UserItem username={user.username} age={user.age} key={Math.random()} />
            )}
        </ul>
    );

};

export default UserList;