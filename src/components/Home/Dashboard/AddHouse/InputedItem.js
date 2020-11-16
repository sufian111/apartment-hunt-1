import React from 'react';
import { useForm } from "react-hook-form";
import upload from '../../../../images/logos/cloud-upload-outline 1.png';

const InputedItem = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-between">
                    <div className="w-50 pr-2">
                        <label htmlFor="">Service Title</label> <br />
                        <input className="form-control" name="example" defaultValue="" ref={register} />
                        <br />

                        <label htmlFor="">Location</label> <br />
                        <input className="form-control" name="exampleRequired" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />

                        <label htmlFor="">No of Bathroom</label> <br />
                        <input className="form-control" name="exampleRequired" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />
                    </div>
                    <div className="w-50 pl-2">
                        <label htmlFor="">Price</label> <br />
                        <input className="form-control" name="example" defaultValue="" ref={register} />
                        <br />

                        <label htmlFor="">No of Bedroom</label> <br />
                        <input className="form-control" name="exampleRequired" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />

                        <label htmlFor="">Thumbnail</label> <br />
                        <label required style={{ backgroundColor: "#DEFFED", color: "#009444", border: "1px solid #009444" }} className="custom-file-upload w-50 p-2 text-center">
                            <input name="file" style={{ display: "none" }} ref={register({ required: true })} type="file" />
                            <img height="20px" src={upload} alt="" /> upload project file
                             </label>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <input className="mt-3 w-25 btn button" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default InputedItem;