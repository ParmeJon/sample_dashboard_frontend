import React, { useState } from 'react';
import calculateRating from '../helper/calculateRating'
import '../styles/card.css'

const Card = ({account}) => {
    const [loaded, setLoaded] = useState(false);

    const {
        name_first, 
        name_last, 
        picture, 
        address, 
        credit,
        balance, 
        comments, 
        email, 
        employer, 
        phone, 
        tags 
    } = account

    const mortgageRating = calculateRating(credit, balance)

    let ratingColor
    if (mortgageRating === 'EXCELLENT' || mortgageRating === 'GOOD') {
        ratingColor = 'green'
    } else if (mortgageRating === 'OKAY') {
        ratingColor = 'yellow'
    } else {
        ratingColor = 'red'
    }

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
          <div className="employer">{employer ? employer : 'n/a'}</div>

          <div className="card-about">
            <div id="email">Email</div>
            <div className="email" aria-labelledby="email">
              {email ? email : 'n/a'}
            </div>
            <div id="phone">Phone</div>
            <div className="phone" aria-labelledby="phone">
              {phone ? phone : 'n/a'}
            </div>
            <div id="address">Address</div>
            <div className="address" aria-labelledby="address">
              {address ? address : 'n/a'}
            </div>
            <div id="balance">Balance</div>
            <div className="balance" aria-labelledby="balance">
              {balance ? balance : 'n/a'}
            </div>
            <div id="credit">Credit</div>
            <div className="credit" aria-labelledby="credit">
              {credit ? credit : 'n/a'}
            </div>
            <div id="rating">Mortgage Rating</div>
            <div className={`rating ${ratingColor}`} aria-labelledby="rating">
              {mortgageRating ? mortgageRating : 'n/a'}
            </div>
          </div>

          <div className="comments">
            <b>Comments: </b>
            {comments ? comments : 'n/a'}
          </div>
        </div>
      </div>
    );
}

export default Card;
