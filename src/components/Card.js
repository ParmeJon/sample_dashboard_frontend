import React, { useState } from 'react';
import '../styles/card.css'

const Card = ({account}) => {
    const [loaded, setLoaded] = useState(false);

    const {
        name_first, 
        name_last, 
        picture, 
        address, 
        balance, 
        comments, 
        email, 
        employer, 
        phone, 
        tags } = account
    return (
      <div className="card">
        <div className="card-avatar">
          {!loaded ? "Loading..." : null}
          <img
            className={loaded ? "avatar" : "img-loading"}
            src={picture}
            alt="avatar"
            onLoad={() => setLoaded(true)}
          ></img>
          <div className="tags-container">
            {tags
              ? tags.map((tag) => <span className="tags">{tag}</span>)
              : null}
          </div>
        </div>
        <div className="card-details">
          <div className="name">{`${name_first} ${name_last}`}</div>
          <div className="employer">{employer}</div>

          <div className="card-about">
            <div id="email">Email</div>
            <div className="email" aria-labelledby="email">
              {email}
            </div>
            <div id="phone">Phone</div>
            <div className="phone" aria-labelledby="phone">
              {phone}
            </div>
            <div id="address">Address</div>
            <div className="address" aria-labelledby="address">
              {address}
            </div>
            <div id="balance">Balance</div>
            <div className="balance" aria-labelledby="balance">
              {balance}
            </div>
          </div>

          <div className="comments">
            <b>Comments: </b>
            {comments}
          </div>
        </div>
      </div>
    );
}

export default Card;
