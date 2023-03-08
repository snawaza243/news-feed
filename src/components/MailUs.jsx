import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_cpbg9r8', 'template_obk6mqk', form.current, 'xVHgKvCvjBKn21Gvp')
            .then((result) => {
                // show the user a success message
                // <h1>Thank you for reaching use <br />We will reply back as soon as possible</h1>
                console.log(result.text)

            }, (error) => {
                // show the user an error
                // <h1>Sorry! I think you are making any mistake <br />Kindly recheck your activity</h1>
                console.log(error.text)
                
            });
    };

    return (
        <div className='my-5' style={{ minHeight: "100vh" }}>
            <div className='p-4'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default EmailContactForm;
