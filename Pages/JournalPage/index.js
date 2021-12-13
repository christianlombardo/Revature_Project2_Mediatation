import React from 'react'

const JournalPage = () => {

    let[responseData, setResponseData] = React.useState('')

    const getList = (e) =>{
        Axios.getData("http://localhost:9001/users/login",{
        .then((response) =>{
            setResponseData(response.data)
        }).catch((error)=>{
            console.log(error)
        })
        
    }
};

    return (
        <div>
            <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Entry Number</th>
            <th scope="col">Journal Entry</th>
            </tr>
        </thead>
        <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{responseData.Id}</td>
      <td>{responseData.Entry}</td>
    </tr>
    </tbody>
</table>
        </div>
    )
}

export default JournalPage
