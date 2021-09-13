import React from 'react';
import Button from '../../UI/Button/Button';

import styles from './UserInput.module.css';



const UserInput = () => {
    return(
        <form>
            <div className={styles['form-control']} >
                <label>Username</label>
                <input></input>
            </div>
            <div className={styles['form-control']}>
                <label>Age (years)</label>
                <input></input>
            </div>
            <Button type='submit'> Add user </Button>
      </form>
    );
};

export default UserInput;