import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Player.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Player = (props) => {
    const { image, name, salary } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="playerCard">
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p><b>Salary :</b> ${salary}M</p>
            <Button variant="success" onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Select Player</Button>
        </div>
    );
};

export default Player;