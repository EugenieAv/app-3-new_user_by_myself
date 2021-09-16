import React, {useState, Fragment, useRef} from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
// import Wrapper from '../../Helpers/Wrapper';

import styles from './AddUser.module.css';



const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.currentTarget.value);
    // };
    
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.currentTarget.value);
    // };

    const addUserHandler = (event) => {
        event.preventDefault();
        const nameInput = (nameInputRef.current.value);
        const ageInput = (ageInputRef.current.value);

        if(nameInput.trim().length === 0 || ageInput.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        
        // on force la convertion de enteredAge en number avec le + car il est initialisé en tant que String
        // et on le compaer à 1. Ca devrait marcher mais pour être sûr , on compare 2 éléments de même nature
        if (+ageInput < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid  age (>0).'
            });
            return;
        }
        props.addUserToList(nameInput, ageInput);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // props.addUserToList(enteredUsername, enteredAge);
        // setEnteredUsername('');
        // setEnteredAge(''); 
    };

    const errorHandler = () => {
        setError(null);
    }
 
    return(
        <Fragment>
            { error && (<ErrorModal 
                title={error.title} 
                message={error.message}
                onConfirm={errorHandler}
                />)}
            <Card className={styles.input}> 
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input 
                        id="username" 
                        type='text' 
                        // onChange={usernameChangeHandler} 
                        // value={enteredUsername}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (years)</label>
                    <input 
                        type="number" 
                        id="age" 
                        // onChange={ageChangeHandler} 
                        // value={enteredAge}
                        ref={ageInputRef}
                    />
                    <Button type="submit"> Add user </Button>
                </form>
            </Card>
        </Fragment>
    );
};

export default AddUser;