import React, { useEffect, useState } from 'react'
import StripeForm from './StripeForm'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
const stripePromise = loadStripe('pk_test_51IeC7dFRLtoNkOSHWneOUIshy17Dipja9Odoy8f8zeX7jOCmoiWxcSJabXvfvEzHjDRMuKwXtgd98Zhrk0A0L29A009ZgQVKaX');

function Enroll() {
    const [course, setCourse]= useState({});
    const {_id}= useParams();
    console.log(_id);
    useEffect(()=> {
        fetch('http://localhost:3001/singleCourse?_id='+_id)
        .then(res=> res.json())
        .then(data=> setCourse(data))
        .catch(err=> console.log(err))
    },[_id])
    return (
        <section className="enroll dash-review">
            <h5 className="my-green">Enroll</h5>
                <Elements stripe={stripePromise}>
                    <StripeForm course={course}></StripeForm>
                </Elements>
        </section>
    )
}

export default Enroll
