
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import NavbarLogged from '../../Components/NavbarLogged';

const JournalPage = () => {


    const initialState = {
        name: '',
        email: '',
        password: '',
        meditationInterests: ''
    }

    const [responseData, setResponseData] = useState({
        initialState
    })

const journalHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9001/users/JournalPage", responseData)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    })
};

    return (
<div>
        <NavbarLogged />

        <div className='journalwrapper text-justify table-bordered table-primary' >
            <table class="table table-striped ">
        <thead>
            <tr>
            <th scope="col-xs-1">Entry Number</th>
            <th scope="col-xs-11">Journal Entry</th>
            </tr>
        </thead>
        <tbody>
    <tr>
    <td scope="row">{responseData.Id}1</td>
      <div className='overflow-auto'>
      <td className='' scope = "col">{responseData.Entry}</td>
      </div>
    </tr>
    </tbody>
</table>
        </div>
        </div>
    )
}

export default JournalPage
