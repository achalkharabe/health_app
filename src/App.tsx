import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaseComponent from './BaseComponent/BaseComponent';
import UserManagement from './user-management/UserManagement';

function App() {
  return (
   <div>
    <BaseComponent title='arc'   name='achal kharabe'></BaseComponent>
    <UserManagement islogin={true}/>
   
    <p>hellow achal</p>
   </div>
  );
}

export default App;
