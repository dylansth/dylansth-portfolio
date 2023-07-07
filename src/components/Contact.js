import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import MyAlert from './MyAlert'

const Contact = () => {

    const initialState = {
        email: '',
        name: '',
        message: ''
    }

    const [formState, setformState] = useState(initialState)
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('')
    const [variant, setVariant] = useState('')

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('')
        if (formState.email == '' || formState.name == '' || formState.message == '') {
            setMessage('Error! One or more fields left empty')
            setVariant('danger')
            setShow(true)
        } else if (formState.email.includes('@') === false) {
            setMessage("Error! Invalid email")
            setVariant('danger')
            setShow(true)
        } else {
            setMessage("Success! Your message has been sent to Dylan")
            setVariant('success')
            setShow(true)
        }
        setformState(initialState)
    };

    const handleChange = (e) => {
        setformState({ ...formState, [e.target.id]: e.target.value })
    }

    return (
        <div>
            {show ? <MyAlert setShow={setShow} message={message} variant={variant} />
                :
                null}
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    id="email"
                    placeholder="required"
                    onChange={handleChange}
                    value={formState.email}
                />
                <label>Name</label>
                <input
                    id="name"
                    placeholder="required"
                    onChange={handleChange}
                    value={formState.name}
                />
                <label>Message</label>
                <input
                    id="message"
                    placeholder="required"
                    onChange={handleChange}
                    value={formState.message}
                />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};
export default Contact;





