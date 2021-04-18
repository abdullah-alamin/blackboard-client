import React, { useState } from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const CheckoutForm = ({course}) => {
  const {title, price, _id}= course;
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage]= useState(null);
  const [formValues, setFormValues]= useState({
    name: '',
    email: '',
  });
  const history= useHistory();

  const handleValue= (e)=> {
    const newFormValue= {...formValues, [e.target.name]:e.target.value};
    setFormValues(newFormValue);
  }

  const token= sessionStorage.getItem('token');
  const {email}= jwtDecode(token);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) {
      setErrorMessage(error.message);
    } else {
      // console.log('[PaymentMethod]', paymentMethod);
      const dataToSend= {...formValues, stripeId: paymentMethod.id,course: course, userEmail: email,status: 'pending'};
      fetch('http://localhost:3001/enroll', {
        method: "POST",
        headers: {'content-type':'application/json'},
        body: JSON.stringify(dataToSend)
      })
      .then(res=>res.json())
      .then(suc=> suc && history.replace('/dashboard/mycourses'))
      .catch(err=> console.log(err))
    }
  };
   
  return (
    <form onSubmit={handleSubmit} className='red'>
      <p style={{color: 'salmon'}} className="text-center">{title}</p>
        <input onChange={handleValue} required type="text" name="name" placeholder="Your name" value={formValues.name}/>

        <input onChange={handleValue} required type="text" name="email" placeholder="Email" value={formValues.email}/>

        <p>Enrollment fee: ${price}</p>
        <div className="my-stripe">
            <label className="mb-4" htmlFor="">Make your payment</label>
        <CardElement />

        <p>{errorMessage}</p>
        </div>
        <input disabled={!stripe} className="my-btn w-25" type="submit" value="Submit"/>
    </form>
  );
};
export default CheckoutForm