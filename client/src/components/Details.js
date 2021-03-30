import React, { useEffect, useState } from 'react';
import {Link, navigate } from '@reach/router';
import axios from 'axios';

const Details = (props) => {
    const [pet, setPet] = useState({});
    let [count, setCount] = useState(0);
    const [allPets, setAllPets] = useState([]);

    let disabledBtn = false;

    const buttonHandler = () => {
        count++;
        setCount(count);

        if(!disabledBtn) {
            document.getElementById('likeButton').disabled = true;
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props._id)
            .then((res) => {
                setPet(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props._id]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet")
            .then((res) => {
                setAllPets(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deletePet = (petId) => {
        axios.delete(`http://localhost:8000/api/pet/${ petId }`)
            .then((res) => {
                console.log(res.data);
                setAllPets(allPets.filter((pet) => pet._id !== petId));
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <div>
            <div className="headingDisplay">
                <h1>Pet Shelter</h1>
                <Link to="/"><p>back to home</p></Link>
            </div>
            <div className="headingDisplay">
                <h2 >Details about: {pet.name} </h2>
                <button className="adoptBtn" onClick={() => deletePet(pet._id)}><i className="fas fa-home"></i>&nbsp; Adopt {pet.name}</button>
            </div>
            <div className="border">
                <table style={{width: "60%"}}>
                    <tr>
                        <td className="newTable">Pet type:</td>
                        <td className="newTable">{pet.type}</td>
                    </tr>
                    <tr>
                        <td className="newTable">Description: </td>
                        <td className="newTable">{pet.description}</td>
                    </tr>
                    <tr>
                        <td className="newTable">Skills:</td>
                        <td className="newTable">{pet.skill1}<br />
                            {pet.skill2}<br />
                            {pet.skill3}<br />
                        </td>
                    </tr>
                </table>
                <button className="likeBtn" id="likeButton" onClick={buttonHandler} disabled={disabledBtn}> <i class="fas fa-thumbs-up"></i> &nbsp; Like {pet.name} </button> &nbsp;&nbsp;&nbsp;
                <p style={{display: "inline-block"}}>{count} like(s)</p>
            </div>
        </div>
    )
};

export default Details;