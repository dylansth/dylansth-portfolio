import React, { useState } from 'react';
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
        console.log('Email:', formState.email);
        console.log('Name:', formState.name);
        console.log('Message:', formState.message);
        setformState(initialState)
    };

    const handleChange = (e) => {
        setformState({ ...formState, [e.target.id]: e.target.value })
    }

    return (
        <div style={{ marginTop: "10%", marginBottom: "10%"}}>
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





