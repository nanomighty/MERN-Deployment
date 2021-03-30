import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const ListAll = (props) => {
    const [allPets, setAllPets] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/pet")
            .then( (res) => {
                setAllPets(res.data);
            })
            .catch( (err) => {
                console.log(err);
            })
    }, [])



    return (
        <div>
            <div className="headingDisplay">
                <h1>Pet Shelter</h1>
                <Link to="/pets/new"><p>add a pet to the shelter</p></Link>
            </div>
        <h2>These pets are looking for a good home</h2>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        allPets.map( (pet, index) => (
                            <tr key={index}>
                                <td>{pet.name}</td>
                                <td>{pet.type }</td>
                                <td>
                                <Link to={`/pets/${pet._id}`}>details</Link><span> | </span>
                                <Link to={`/pets/${pet._id}/edit`}>edit</Link>

                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
};

export default ListAll;