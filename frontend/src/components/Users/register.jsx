import React from 'react';
import Navigation from '../navigation/navigation';
import Form from './form';

export default function Register(props) {
    return (
        <div>
            <Navigation url={'/'}>
                {' Login '}
                </Navigation>
            <Form 
                btnName={props.btnName}
                url={props.url}
            />
        </div>
    )
};