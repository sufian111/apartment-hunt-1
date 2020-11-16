import React from 'react';

const RentTable = () => {
    return (
        <div>
            <table class="table table-borderless bg-light rounded">
                <thead>
                    <tr>
                        <th scope="col">House name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Washington Avenue</th>
                        <td>$195</td>
                        <td><button className="btn button">View Details</button></td>
                    </tr>
                    <tr>
                        <th scope="row">Washington Avenue</th>
                        <td>$195</td>
                        <td><button className="btn button">View Details</button></td>
                    </tr>
                    <tr>
                        <th scope="row">Washington Avenue</th>
                        <td>$195</td>
                        <td><button className="btn button">View Details</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RentTable;