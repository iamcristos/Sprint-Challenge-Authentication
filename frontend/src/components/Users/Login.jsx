import React from 'react';
import Navigation from '../navigation/navigation';
import Form from './form';

export default function Login(props) {
    return (
        <div>
            <Navigation url={'/login'}>
                {'Register'}
                </Navigation>
            <Form 
                btnName={props.btnName}
                url={props.url}
            />
        </div>
    )
};