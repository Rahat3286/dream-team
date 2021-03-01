import React from 'react';

const Squad = (props) => {
    const squad = props.squad;
    const totalSalary = squad.reduce( (sum, player) => sum + player.salary, 0);
    return (
        <div>
            <p><b>Total Salary :</b> ${totalSalary}M</p>
        </div>
    );
};

export default Squad;