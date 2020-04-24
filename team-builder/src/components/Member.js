import React from "react";


const Member = props => {
    return (
        <div className="member-list">
            {props.teammembers.map(teammember => (
                <div className="teammember" key={teammember.id}>
                    <h2>{teammember.name}</h2>
                    <h3>{teammember.email}</h3>
                    <p>{teammember.job}</p>

                </div>
            ))}
        </div>
    );
};

export default Member;  