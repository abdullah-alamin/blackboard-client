import React from 'react'
import { useForm } from "react-hook-form";

function Review() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:3001/addReview', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(suc=> suc && alert('Your review has been recorded.'))
        .catch(err=> console.log(err))
    };
    return (
        <div className='dash-review'>
            <h5 className="my-green">Review</h5>
            <form onSubmit={handleSubmit(onSubmit)} className="red">
                <input type="text" placeholder="Your name" {...register("name", { required: true })}/>
                {errors.name && <p>Name is required</p>}

                <input type="text" placeholder="Review Heading" {...register("heading", { required: true })}/>
                {errors.heading && <p>Review heading is required</p>}

                <input type="text" placeholder="Rating" {...register("rating", { required: true })}/>
                {errors.rating && <p>Rating is required</p>}

                <textarea name="" id="" cols="30" rows="10" placeholder="Review" {...register("review", { required: true })}></textarea>
                {errors.review && <p>Review description is required</p>}

                <input className="my-btn w-25" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Review
