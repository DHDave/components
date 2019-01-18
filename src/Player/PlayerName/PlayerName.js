import React from 'react';
import './PlayerName.css';

export default function PlayerName(props) {
    return(
        <div className='PlayerName'>
            <div className='title' >Name: {props.name}</div>
        </div>
    );
}