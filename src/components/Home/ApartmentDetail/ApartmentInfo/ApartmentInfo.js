import React from 'react';
import apartment from '../../../../images/images/Rectangle 396.png';
import apartment2 from '../../../../images/images/Rectangle 398.png';
import apartment3 from '../../../../images/images/Rectangle 403.png';
import apartment4 from '../../../../images/images/Rectangle 404.png';
import apartment5 from '../../../../images/images/Rectangle 405.png';
import { useForm } from "react-hook-form";

const ApartmentInfo = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"))

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="w-100">
                        <img height="350px" width="730px" src={apartment} alt="" />
                    </div>
                    <div className="d-flex justify-content-between w-100 mt-4">
                        <img height="110px" width="170px" src={apartment2} alt="" />
                        <img height="110px" width="170px" src={apartment3} alt="" />
                        <img height="110px" width="170px" src={apartment4} alt="" />
                        <img height="110px" width="170px" src={apartment5} alt="" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <form className="p-4" style={{ backgroundColor: "#F4F4F4" }} onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" name="exampleRequired" placeholder="Full Name" required ref={register({ required: true })} />
                        <br />

                        <input className="form-control" name="exampleRequired" placeholder="Phone No." required ref={register({ required: true })} />
                        <br />

                        <input className="form-control" name="exampleRequired" placeholder="Email Address" required ref={register({ required: true })} />
                        <br />

                        <textarea className="form-control" name="exampleRequired" placeholder="Massage" cols="30" rows="7" Massage required ref={register({ required: true })} />
                        <br />

                        <input className="btn button w-100" type="submit" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ApartmentInfo;