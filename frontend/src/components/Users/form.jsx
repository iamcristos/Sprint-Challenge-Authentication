import React from 'react';
import {toast} from 'react-toastify';
import axois from '../../axois';
import styled from 'styled-components';
import Svg from '../../assests/images.svg';


const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 3px 10px;
    width: 98%;
    height: 100vh;
    border: 1px solid green;
    -webkit-box-shadow: -8px -5px 0px -5px rgba(0,0,0,0.73);
-moz-box-shadow: -8px -5px 0px -5px rgba(0,0,0,0.73);
box-shadow: -8px -5px 0px -5px rgba(0,0,0,0.73);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 30px;
    div{
        img {
            border: 1px solid red;
            width: 40px;
        }
    }
    label {
        width: 300px;
        input, textarea {
            width: 300px;
            padding: 10px;
            margin: 10px;
            border: 1px solid black;
            outline: none;
        }
    };
    button {
        width: 300px;
        height: 30px;
        border-radius: 10px;
        margin: 10px;
        cursor: pointer;
        background-color: rgba(0.6, 0.9, 0.9, .9);
        color: white;
        outline: none;
        &:hover {
            transition: all 5 ease-in-out;
            background-color: rgba(0.9, 0.9, 0.9, 1);
        }
    }
`;
export default function PostForm(props) {
    const [username, updateUsername] = React.useState('')
    const [password, updatePassword] = React.useState('')
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        const user = {
            username,
            password
        }
        axois().post(`/${props.url}`,user )
            .then(res=>toast.success('user added sucessfully'))
            .catch(err=> toast.error('user was not added'))
            .finally(()=>{
                updateUsername('')
                updatePassword('')
            })
    }
    return (
        <Div>
            <div>
                <img src={Svg} alt="svg" style={{width: '700px', height: "500px", marginRight: "20px"}}/>
            </div>
            <Form onSubmit={(e)=>onSubmitHandler(e)}>
                <h3>Fill out the form</h3>
                <label>
                    Name:
                    <input type="text" value={username}
                    onChange={(e)=>updateUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input type="text" 
                        value={password}
                        onChange={(e)=>updatePassword(e.target.value)}
                        />
                </label>
                <button>{props.btnName}</button>
            </Form>
        </Div>
    )
}
