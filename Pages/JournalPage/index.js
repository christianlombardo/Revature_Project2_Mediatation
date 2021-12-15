
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import NavbarLogged from '../../Components/NavbarLogged';
import { useSelector } from 'react-redux';

const JournalPage = () => {

    const user = useSelector(state => state.user);

    const [journals, setJournals]  = useState([]);

    const [journal, setUser] = useState({
        email: '',
        password : ''
    });

    // const initialState = {
    //     userid: user.id,
    //     journalnotes: ''
    // }

    // const [responseData, setResponseData] = useState({
    //     initialState
    // })

// const journalHandler = (e) => {
//     e.preventDefault();
//     axios.get("http://localhost:9001/journals", user.id)
//     .then(response => setJournals(response.data))
//     .catch(error => {
//         console.error(error);
//     })
// };

    console.log("user.id ====================");
    console.log(user.id);
    useEffect(() => {
        axios.post(`http://localhost:9001/journals/${user.id}`)
        .then((response) => setJournals(response.journalnotes))
        .catch(error => console.error(error));
    });

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
                    {/* <td scope="row">{responseData.Id}1</td> */}
                    <div className='overflow-auto'>
                    {/* <td className='' scope = "col">{responseData.Entry}</td> */}
                    </div>
                    </tr>
                    </tbody>
                </table>

                <div className="row">
                {journals.map(journal => <div>{journal.journalnotes}</div> )}
            </div>

                </div>
        </div>
    )
}

export default JournalPage
