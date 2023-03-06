import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import ShowResult from "./ShowResult"
import depress_img from "./../Images/depressed.jpg"
import nondepress_img from "./../Images/nonDepressed.jpg"

function Home(props) {
    const handleClick = ((e) => {
        e.preventDefault();
        let form=document.getElementById("my-form");
        let Form=new FormData(form);
        Form.append("profession",document.getElementById("exampleFormControlSelect3").value)
        Form.append("maritial_status",document.getElementById("exampleFormControlSelect4").value)
        axios.post("/predict",[...Form.values()]).then(response=>
            {
                set_prediction(response.data.prediction)
                if(prediction == 1)
                {
                    set_results(
                        {
                            message:"There is a high chance that you are not in a proper mental state. But Dont worry It is treatable please visit the link below",
                            link:"https://www.vandrevalafoundation.com/",
                            img:depress_img,
                            title:"Depressed"
                        }
                    )
                }
                else{
                    set_results(
                        {
                            message:"It Seems that your mental state is in a very good state. But, yet you can read more about it . Please visit the below link",
                            link:"https://www.ourbetterworld.org/series/mental-health/story/impart-ing-a-life-worth-living",
                            img:nondepress_img,
                            title:"Not Depressed"

                        }
                    )
                }
                document.body.scrollIntoView(false);
                console.log(response.data.prediction)
            })
    
    }
    )   
    let [prediction,set_prediction]=useState(null);
    let [Results,set_results]=useState({});
    return (
        <>
        <div className="container my-5 justify-content-center" >
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <div className="form-wrapper shadow">
                        <form id='my-form'> 
                            {/* <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" required />
                            </div> */}
                            <div className="mb-3">

                                <label htmlFor="age" className="form-label">Age</label>
                                <input type="number" className="form-control" id="age" name="age" required />
                            </div>


                            <div className='row mb-3' >
                                <div className="form-group col-lg-6">
                                    <label htmlFor="exampleFormControlSelect1">Gender</label>
                                    <select className="form-control" id="exampleFormControlSelect1" name='gender'>
                                        <option value="2">Male</option>
                                        <option value="1">Female</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-6">
                                    <label htmlFor="exampleFormControlSelect2">education</label>
                                    <select className="form-control" id="exampleFormControlSelect2" name='education'>
                                        <option value="1">Post Graduate</option>
                                        <option value="2">HSC</option> 
                                        <option value="3">Graduate</option>
                                        <option value="4">SSC</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-6">
                                    <label htmlFor="exampleFormControlSelect3" name="profession">profession</label>
                                    <select className="form-control" id="exampleFormControlSelect3">

                                        <option value="1">Unemployed</option>
                                        <option value="2">Service holder (Private)</option>
                                        <option value="3">Student</option>
                                        <option value="4">Service holder (Government)</option>
                                        <option value="5">Other</option>
                                        <option value="6">Businessman</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-6">
                                    <label htmlFor="exampleFormControlSelect4" name="maritial_status">Maritial Status</label>
                                    <select className="form-control" id="exampleFormControlSelect4">

                                        <option value="1">Unmarried</option>
                                        <option value="2">Married</option>
                                        <option value="3">Divorced</option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className='row mb-3'>
                                
                
                            </div> */}
                            <div className='row mb-3'>
                                <div className="form-group col-lg-6">
                                    <label htmlFor="exampleFormControlSelect5">Residential Place</label>
                                    <select className="form-control" id="exampleFormControlSelect5" name="residential_place">
                                        <option value="1">Town</option>
                                        <option value="2">City</option>
                                        <option value="3">Village</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-6">
                                    <label htmlFor="exampleFormControlSelect6">Living With</label>
                                    <select name="living_with" className="form-control" id="exampleFormControlSelect6">
                                        <option value="1">With Family</option>
                                        <option value="2">Without Family</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-6">
                                    <label htmlFor="exampleFormControlSelect7">Are You in Debt?</label>
                                    <select name="debt" className="form-control" id="exampleFormControlSelect7">
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-6">
                                    <label htmlFor="exampleFormControlSelect8">Do You Smoke?</label>
                                    <select name="smoke" className="form-control" id="exampleFormControlSelect8">
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-6">
                                    <label htmlFor="exampleFormControlSelect9">Do You Drink?</label>
                                    <select name="drink" className="form-control" id="exampleFormControlSelect9">
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-6">
                                    <label htmlFor="exampleFormControlSelect10">Are You ill?</label>
                                    <select name="illness" className="form-control" id="exampleFormControlSelect10">
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>

                                {/* <p>Average Sleep</p> */}
                                <div className="form-group col-lg-6">
                                    <label htmlFor="exampleFormControlSelect12">Average Sleep</label>
                                    <select name="average_sleep" id="exampleFormControlSelect12" className="form-control" required>

                                        <option value="1">More than 8 hours</option>
                                        <option value="2">6 hours</option>
                                        <option value="3">8 hours</option>
                                        <option value="4">7 hours</option>
                                        <option value="5">5 hours</option>
                                        <option value="6">Below 5 hours</option>
                                    </select>
                                </div>

                                {/* <p>Do You have Insomia?</p> */}
                                <div className="form-group col-lg-6">

                                    <label htmlFor="exampleFormControlSelect13">Do You have Insomia</label>
                                    <select name="insomia" className="form-control" id="exampleFormControlSelect13" required>

                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>

                                {/* <p>Work Pressure</p> */}
                                <div className="form-group col-lg-6">

                                    <label htmlFor="exampleFormControlSelect14">Work Pressure</label>
                                    <select name="work_pressure" className="form-control" id="exampleFormControlSelect14" required>

                                        <option value="1">No Pressure</option>
                                        <option value="2">Moderate</option>
                                        <option value="3">Mild</option>
                                        <option value="4">Severe</option>
                                    </select>
                                </div>

                                {/* <p>Anxiety?</p> */}
                                <div className="form-group col-lg-6">

                                    <label htmlFor="exampleFormControlSelect15">Anxiety?</label>
                                    <select name="anxiety" className="form-control" id="exampleFormControlSelect15" required>

                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>

                                </div>
                                {/* <p>Do you feel depressed?</p> */}
                                <div className="form-group col-lg-6">

                                    <label htmlFor="exampleFormControlSelect16">Do you feel depressed?</label>
                                    <select name="depressed" className="form-control" id="exampleFormControlSelect16" required>

                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>

                                {/* <p>Have You Been Abused?</p> */}
                                <div className="form-group col-lg-6">

                                    <label htmlFor="exampleFormControlSelect17">Have You Been Abused?</label>
                                    <select name="abused" className="form-control" id="exampleFormControlSelect17" required>

                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>

                                {/* <p>Have you been cheated?</p> */}
                                <div className="form-group col-lg-6">

                                    <label htmlFor="exampleFormControlSelect18">Have you been cheated?</label>
                                    <select name="cheat" className="form-control" id="exampleFormControlSelect18" required>

                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>

                                {/* <p>Have you recieve a threat?</p> */}
                                <div className="form-group col-lg-6">

                                    <label htmlFor="exampleFormControlSelect19">Have you recieve a threat?</label>
                                    <select name="threat" className="form-control" id="exampleFormControlSelect19" required>

                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>

                                {/* <p>Do you feel to sucide?</p> */}
                                <div className="form-group col-lg-6">

                                    <label htmlFor="exampleFormControlSelect20">Do you feel to sucide?</label>
                                    <select name="sucide" className="form-control" id="exampleFormControlSelect20" required>

                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>

                                </div>
                                {/* <p>Have you lost someone recently?</p> */}
                                <div className="form-group col-lg-6">
                                    <label htmlFor="exampleFormControlSelect21">Have you lost someone recently?</label>
                                    <select name="lost" className="form-control" id="exampleFormControlSelect21" required>

                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                            </div>
                            <button className="btn btn-primary" onClick={handleClick}>Predict</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center' style={{borderWidth:"0" }} >
                <div className="col-md-4 justify-content-center card my-5">
            {prediction && <ShowResult message={Results.message} link={Results.link} img={Results.img} title={Results.title}/>}
            </div>
            </div>
        </div>
        
        </>
    )
}

export default Home