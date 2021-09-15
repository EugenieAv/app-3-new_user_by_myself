import React from 'react';
import UserItem from '../UserItem/UserItem';
import Card from '../../UI/Card/Card';

import styles from './UserList.module.css';

const UserList = (props) => {

    return(
        <Card className={styles.users}>
            <ul>
                {props.users.map(user=>
                    <UserItem 
                        key={user.id}
                        username={user.username}
                        age={user.age}
                    />
                )}
            </ul>
        </Card>
    );

};

export default UserList;