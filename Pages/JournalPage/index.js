
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

    const testnotes = [
        {
            "journalid": 2,
            "userid": 1,
            "journalnotes": "Delicious tasty relaxing chillout...."
        },
        {
            "journalid": 3,
            "userid": 1,
            "journalnotes": "Delicious tasty relaxing chilloutsssssssssss .......... :-))))))"
        },
        {
            "journalid": 7,
            "userid": 1,
            "journalnotes": "Hello journal notes do it.... "
        },
        {
            "journalid": 8,
            "userid": 1,
            "journalnotes": "Delicious tasty relaxing chilloutsssssssssss .......... :-)))))) It's Friday night smoke a bowl.... "
        },
        {
            "journalid": 9,
            "userid": 1,
            "journalnotes": "Delicious tasty relaxing chilloutsssssssssss .......... :-)))))) It's Friday night smoke a bowl.... We are going to be entering more chilloutss heree....."
        }
    ];

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
        const source = `http://localhost:9001/journals/${user.id}`;
        console.log(source);
        axios.post(`http://localhost:9001/journals/${user.id}`)
        // .then(output => console.log(output))
        // .then((response) => setJournals(response.data.journalnotes))
        .then((response) => setJournals(response.data))
        .catch(error => console.error(error));
    });

    // console.log("journals  =================");
    // console.log(journals);

    return (
        <div>
                <NavbarLogged />

                <div className='journalwrapper text-justify table-bordered table-primary' >
                    <table class="table table-striped ">
                        <thead>
                            <tr>
                            <th scope="col-xs-1">Journal Entry</th>
                            </tr>
                        </thead>
                        <tbody>
                    {/* <tr> */}
                        {journals.map(journal => <tr>{journal.journalnotes}</tr> )}
                        {/* <td scope="row">{responseData.Id}1</td> */}
                    {/* </tr> */}
                    </tbody>
                </table>

                <div className="row">
                {/* {journals.map(journal => <div>{journal.journalnotes}</div> )} */}
                {/* {testnotes.map(journal => <div>{journal.journalnotes}</div> )} works */}
            </div>

                </div>
        </div>
    )
}

export default JournalPage
