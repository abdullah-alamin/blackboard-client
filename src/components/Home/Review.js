import React from 'react'

function Review({reviewData}) {
    const {name, heading, rating, review}= reviewData;
    return (
        <div className="review px-4 py-2 pt-4">
            <div className="review-text">
                <h4 className="my-green">{heading}</h4>
                <p className="text-muted fs-6">{review}</p>
            </div>
            <div>
                <p className="fs-5">Rating: <span style={{color: 'salmon'}}>{rating}</span></p>
                <p className="fs-5"><small>{name}</small></p>
            </div>
        </div>
    )
}

export default Review
