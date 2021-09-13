import React from 'react';
import UserInput from './components/Users/UserInput/UserInput';
import Card from './components/UI/Card/Card';
import UserList from './components/Users/UserList/UserList';

import styles from './App.module.css';

function App() {
  const users = [
    {username: 'Jean', age: 26},
    {username: 'Gabriel', age: 30}
  ]

  return (
    <div className={styles.container}>
      <Card >
        <UserInput />
      </Card>
      <Card>
        <UserList users={users}/>
      </Card>
    </div>
  );
}

export default App;
