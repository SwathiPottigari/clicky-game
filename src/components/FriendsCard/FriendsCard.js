import React from "react";

function FriendsCard(props) {
    return (

        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." />          
        </div>
    );
}

export default FriendsCard;