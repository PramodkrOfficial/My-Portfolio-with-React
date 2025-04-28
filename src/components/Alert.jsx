import React, { useEffect } from 'react';

const WelcomeAlert = () => {
    useEffect(() => {
        alert("Welcome to you my website");
    }, []);

    return (
        <>
            <div>
                <h1>Welcome to you my website</h1>
                {/* Other content can go here */}
            </div>
        </>
    );
};

export default WelcomeAlert;