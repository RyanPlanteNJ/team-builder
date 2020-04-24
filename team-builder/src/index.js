import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MemberForm from './components/MemberForm';
import Member from './components/Member';

function App() {
  const [teammembers, setTeamMembers] = useState(['']);

  const addTeamMember = teammember => {
    const newTeamMember = {
      id: Date.now(),
      name: teammember.name,
      email: teammember.email,
      job: teammember.job
    };
    setTeamMembers([...teammembers, newTeamMember]);
  };

  return (
    <div className="App">
      <h1> Team Members </h1>      
      <MemberForm addTeamMember = {addTeamMember}/>
      <Member teammembers ={teammembers}/>
    </div>
  )
}



const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
