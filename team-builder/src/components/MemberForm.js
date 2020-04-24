import React, { useState } from 'react';

const MemberForm = ({ addTeamMember }) => {

    const [teammembers, setTeamMembers] = useState({name:'', email:'', job: ''});

    const handleChanges = event => {
        setTeamMembers({...teammembers, [event.target.name]: event.target.value});
};
    const submitForm = event => {
        event.preventDefault();
        addTeamMember(teammembers);
        setTeamMembers({name:'', email:'', job:''})
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name"> Name: </label>
            <input
                id="name"
                type="text"
                placeholder="Enter Name"
                value={teammembers.name}
                name="name"
                onChange={handleChanges}
            />
            <label htmlFor="email"> Email: </label>
            <input
                id="email"
                type="email"
                placeholder="Email Address"
                value={teammembers.email}
                name="email"
                onChange={handleChanges}
             />
            <label htmlFor="job"> Job Title: </label>
            <input
                id="job"
                type="text"
                placeholder="Job Title"
                value={teammembers.job}
                name="job"
                onChange={handleChanges}
            />
            <button type="submit">Add New Team Member</button>
        </form>
    );
};

export default MemberForm;
