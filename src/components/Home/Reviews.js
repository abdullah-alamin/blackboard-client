import React, { useEffect, useState } from 'react'
import Review from './Review'

function Reviews() {
    const [reviews, setReviews]= useState([]);
    useEffect(()=> {
        fetch('http://localhost:3001/allReviews')
        .then(res=> res.json())
        .then(data=> setReviews(data))
        .catch(err=> console.log(err))
    },[])
    return (
        <section className="reviews py-5">
            <h1 className="text-center pb-5">Testimonials</h1>
            <div className="reviews-column container">
                {
                    reviews.map(review=> <Review key={review._id} reviewData={review}/>)
                }
            </div>
        </section>
    )
}

export default Reviews
