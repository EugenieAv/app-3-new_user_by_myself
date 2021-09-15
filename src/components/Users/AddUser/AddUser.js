import React, {useState} from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

import styles from './AddUser.module.css';



const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    // const [isValid, setIsValid] = useState(true);


    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.currentTarget.value);
    };
    
    const ageChangeHandler = (event) => {
        setEnteredAge(event.currentTarget.value);
    };

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log('try to submit');
        
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }

        // on force la convertion de enteredAge en number avec le + car il est initialisé en tant que String
        // et on le compaer à 1. Ca devrait marcher mais pour être sûr , on compare 2 éléments de même nature
        if (+enteredAge < 1){
            return;
        }

        console.log(enteredUsername, enteredAge);
        props.addUserToList(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
        // setEnteredUser('');
        
    };
 
    return(
        <div>
            <ErrorModal 
                title="An Error occured!" 
                message="Something went wrong" 
            />
            <Card className={styles.input}> 
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input id="username" type='text' onChange={usernameChangeHandler} value={enteredUsername}></input>
                    <label htmlFor="age">Age (years)</label>
                    <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge} ></input>
                    <Button type="submit"> Add user </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;