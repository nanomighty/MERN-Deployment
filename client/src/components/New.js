import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const New = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errs, setErrs] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/pet', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3,
        })
            .then((res) => {
                if (res.data.errors){
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data);
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div>
            <div className="headingDisplay">
                <h1>Pet Shelter</h1>
                <Link to="/"><p>back to home</p></Link>
            </div>
            <h2>Know a pet needing a home?</h2>
            <form onSubmit={submitHandler}>
                <div className="floatLeft">
                    <div>
                        <label>Pet Name: </label>
                        <input type="text" 
                            name="name"
                            value={name}
                            onChange = {(e) => setName(e.target.value) }
                        />
                        {
                            errs.name ?
                                <span className="error-text">{errs.name.message}</span> :
                                null
                        }
                    </div>
                    <div>
                        <label>Pet Type: </label>
                        <input type="text" 
                            name="type"
                            value={type}
                            onChange = {(e) => setType(e.target.value)}
                        />
                        {
                            errs.type ?
                                <span className="error-text">{errs.type.message}</span> :
                                null
                        }
                    </div>
                    <div>
                        <label>Pet Description: </label>
                        <input type="text"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        {
                            errs.description ?
                                <span className="error-text">{errs.description.message}</span> :
                                null
                        }
                    </div>
                </div>
                <div className="floatRight">
                    <p style={{marginTop: "0px", marginBottom: "25px"}}> Skills (optional)</p>
                    <div>
                        <label>Skill 1: </label>
                        <input type="text"
                            name="skill1"
                            value={skill1}
                            onChange={(e) => setSkill1(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Skill 2: </label>
                        <input type="text"
                            name="skill2"
                            value={skill2}
                            onChange={(e) => setSkill2(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Skill 3: </label>
                        <input type="text"
                            name="skill3"
                            value={skill3}
                            onChange={(e) => setSkill3(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <button className="addBtn" type="submit"> <i className="fas fa-upload"></i> &nbsp; Add Pet </button>
                </div>
            </form>
        </div>
    )
};

export default New;