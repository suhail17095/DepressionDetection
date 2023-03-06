import React from 'react'
import axios from "axios"
import { useState } from 'react';

 
function Second(props) {
    const handleClick = ((e) => {
        e.preventDefault();
        let textarea = document.getElementById("exampleFormControlTextarea1");
        axios.post("/tweet", {
            message: textarea.value
        }).then(response => {
            let depress=response.data.depress
            let non_depress=response.data.non_depress

            let depress_per=(depress*100)/(depress+non_depress)
            let non_depress_per=(non_depress*100)/(depress+non_depress)
            setPositive(non_depress_per)
            setNegative(depress_per)
            console.log(response.data)
        })
    }
    )
    let [positive,setPositive]=useState(0)
    let [negative,setNegative]=useState(0)

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="form-wrapper shadow">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">

                                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button className='btn btn-primary' onClick={handleClick}>Predict</button>
                                </div>
                                <div className="col-md-4 justify-content-center">
                                    <label htmlFor="positive">Positive</label>
                                    <div className="progress" style={{ marginBottom: "15px" }}>
                                        <div id="positive" className="progress-bar bg-success" role="progressbar" style={{ width: positive + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Math.round(positive)}%</div>
                                    </div>
                                    <label htmlFor="negative">Negative</label>
                                    <div className="progress my-20" style={{ marginBottom: "15px" }}>
                                        <div className="progress-bar" id='negative' role="progressbar" style={{ width: negative + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Math.round(negative)}%</div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second