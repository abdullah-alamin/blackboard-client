import React, { useState } from 'react'
import { useForm } from "react-hook-form";

function AddCourse() {
    const [imgURL, setImgURL]= useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const handleImage= (e)=> {
        const imgbbKey= '8ce188d14fc210b8d6e1c1165b3dac8c';
        const file= e.target.files[0];
        const formData= new FormData();
        formData.append('image', file);
        formData.append('key', imgbbKey);
        fetch('https://api.imgbb.com/1/upload', {
            method: "POST",
            body: formData
        })
        .then(res=> res.json())
        .then(data=> setImgURL(data.data.display_url))
        .catch(err=> console.log(err))
    }
    const onSubmit = data => {
        const {title, description, instructor, level, price, number}= data;
        if(imgURL){
            const dataToServer= {title, description, instructor, level, price,imgURL,number};
            fetch('http://localhost:3001/addCourse', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToServer)
            })
            .then(res=> res.json())
            .then(suc=> suc && alert('The item has been added successfully.'))
            .catch(err=> console.log(err))
        }else {
            alert('Please wait for the image to be uploaded.')
        }
    };
    return (
        // style is the same as dashboard review page
        <section className="add-course dash-review"> 
            <h5 className="my-green">Add a new course</h5>
            <form onSubmit={handleSubmit(onSubmit)} className="red">
                <input type="text" placeholder="Course Title" {...register("title", { required: true })}/>
                {errors.title && <p>Course title is required</p>}

                <textarea name="" id="" cols="30" rows="5" placeholder="Description" {...register("description", { required: true })}></textarea>
                {errors.description && <p>Course description is required</p>}

                <input type="text" placeholder="How many classes?" {...register("number", { required: true })}/>
                {errors.title && <p>Number of classes is required</p>}

                <div className="input-grouped">
                    <input type="text" placeholder="Instructor" {...register("instructor", { required: true })}/>

                    <input type="text" placeholder="Level" {...register("level", { required: true })}/>
                </div>
                    {errors.instructor && <p>Instructor name is required</p>}
                    {errors.level && <p>Course level is required</p>}
                <div className="input-grouped">
                    <input type="text" placeholder="Price" {...register("price", { required: true })}/>

                    <input type="file" placeholder="Image" {...register("image", { required: true })} onChange={handleImage}/>
                </div>               
                    {errors.price && <p>Course price is required</p>}
                    {errors.image && <p>Course image is required</p>}
                <input className="my-btn w-25" type="submit" />
            </form>
        </section>
    )
}

export default AddCourse
