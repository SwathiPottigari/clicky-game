import React from "react";
import "./FriendCard.css";

function FriendsCard(props) {
    return (

        <div className="card" onClick={props.checkGame}>
            <img src={props.image} className="card-img-top" alt="..." id={props.id} />          
        </div>
    );
}

export default FriendsCard;