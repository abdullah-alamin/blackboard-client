import React from 'react'
import { useForm } from "react-hook-form";

function AddAdmin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit= data=> {
        fetch('https://vast-bastion-90682.herokuapp.com/addAdmin', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(suc=> suc && alert('A new admin added successfully.'))
        .catch(err=> console.log(err))
    }
    return (
        //the style is the same a dash review
        <div className='dash-review add-admin'>
            <h5 className="my-green">Add a new admin</h5>
            <form onSubmit={handleSubmit(onSubmit)} className="red" >
                <input type="text" placeholder="Email Address" {...register("email", { required: true })}/>
                {errors.email && <p>Admin email is required</p>}

                <input className="my-btn w-25 mt-4" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AddAdmin
