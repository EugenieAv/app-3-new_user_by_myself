import React, {useState} from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UserList from './components/Users/UserList/UserList';

const App = () => {
  // const users = [
  //   {username: 'Jean', age: 26, id: 'g1'},
  //   {username: 'Gabriel', age: 30, id: 'g2'}
  // ]
  const capitalize = (name) => {
    return `${name[0].toUpperCase()}${name.substring(1).toLowerCase()}`;
  }
  const [listingUsers, setListingUsers] = useState([]);

  const addUserToListHandler = (surname, age) => {
    setListingUsers((prevState)=>{
      // const addToTheList = [...prevState];
      // console.log(addToTheList);
      // addToTheList.unshift( {username: surname, age: age, id: Math.random()});
      // console.log(addToTheList);
      // return addToTheList;
      return [...prevState, {username: capitalize(surname), age: age, id: Math.random().toString()}];
    });
  };


  return (
    <>
      <AddUser addUserToList={addUserToListHandler} />
      <UserList users={listingUsers} />
    </>
  );
}

export default App;
