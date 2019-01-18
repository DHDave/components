import React from 'react';
import PlayerName from './PlayerName/PlayerName';
import './Player.css';

export default function Player(props) {
    return (
        <div 
            className='Player'
            onClick={() => props.onPlayerSelected(props.name)}> 
            <img src={props.avatar} alt='User avatar' />
            <PlayerName name={props.name} />
            <div><em>Score: {props.score}</em></div>
            <div className='subtitle'>
                {props.message || 'Emmanuel: God is with us!'}
            </div>
        </div>
    );
}