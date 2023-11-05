import React from 'react';
import Navbar from '../components/Navbar';
import FormMain from '../containers/FormMain';

const Form = () => {
    return (
        <div className="w-screen h-screen  bg-american-blue-bg">
            <Navbar />
            <FormMain />
        </div>
    );
};

export default Form;