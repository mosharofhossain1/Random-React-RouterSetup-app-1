// import React from 'react';

const Contact = () => {
    return (
        <div className="bg-orange-500 p-5">
            <div className="flex flex-col space-y-5">
                <input className="p-2 rounded-lg" type="text" placeholder="Enter Name " />
                <input className="p-2 rounded-lg" type="email" placeholder="Enter Email" />
                <textarea className="p-2 rounded-lg" name="" id="" placeholder="Your Message"></textarea>
                <button className="bg-red-600 px-3 py-2
                 w-full rounded-lg text-white text-2xl">Message Send </button>
            </div>
        </div>
    );
};

export default Contact;