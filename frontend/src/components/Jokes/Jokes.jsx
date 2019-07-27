import React from 'react'
import axios from '../../axois'
import {toast} from 'react-toastify';

export default function Jokes() {
    const [jokes, updateJokes] = React.useState([])
    React.useEffect(()=> {
        const token = localStorage.getItem('token')
      axios(token).get('/jokes')
                    .then(res =>{
                        updateJokes(res.data)
                    }).catch(err=>{
                        toast.error('cannot get jokes')
                    })
    }, [])

    let joke = <div>Loading....</div>

        if(jokes.length) {
            jokes.map(jokez=> joke = <li>{jokez.joke}</li>)
        }
    return (
        <div>
            {joke}
        </div>
    )
}