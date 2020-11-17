import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';
import upload from '../../../../images/logos/cloud-upload-outline 1.png';

const InputedItem = () => {
    const { userData } = useContext(UserContext);
    const [user, setUser] = userData;

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        const image = data.file[0];
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('title', data.title);
        formData.append('location', data.location);
        formData.append('bath', data.bath);
        formData.append('price', data.price);
        formData.append('bed', data.bed);
        formData.append('image', image);

        fetch('https://hunt-apartment.herokuapp.com/addRent', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Order Added successfully')
                }
            })
            .catch(error => {
                alert('Failed to add Order')
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-between font-weight-bold">
                    <div className="w-50 pr-2">

                        <input style={{ display: "none" }} className="form-control" name="name" placeholder="Enter title" defaultValue={user.name} ref={register} />

                        <input style={{ display: "none" }} className="form-control" name="email" placeholder="Enter title" defaultValue={user.email} ref={register} />

                        <label htmlFor="">Service Title</label> <br />
                        <input className="form-control" name="title" placeholder="Enter title" required ref={register} />
                        <br />

                        <label htmlFor="">Location</label> <br />
                        <input className="form-control" name="location" placeholder="Enter Location" required ref={register({ required: true })} />
                        <br />

                        <label htmlFor="">No of Bathroom</label> <br />
                        <input className="form-control" name="bath" required ref={register} />
                        <br />
                    </div>
                    <div className="w-50 pl-2">
                        <label htmlFor="">Price</label> <br />
                        <input className="form-control" name="price" placeholder="Price" required ref={register} />
                        <br />

                        <label htmlFor="">No of Bedroom</label> <br />
                        <input className="form-control" name="bed" required ref={register({ required: true })} />
                        <br />

                        <label htmlFor="">Thumbnail</label> <br />
                        <label required style={{ backgroundColor: "#DEFFED", color: "#009444", border: "1px solid #009444", cursor: "pointer" }} className="custom-file-upload w-50 p-2 text-center">
                            <input name="file" required style={{ display: "none" }} ref={register({ required: true })} type="file" />
                            <img height="20px" src={upload} alt="" /> upload project file
                             </label>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <input className="mt-3 w-25 btn button" value="send" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default InputedItem;