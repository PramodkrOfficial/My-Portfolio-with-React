import React, { useEffect } from 'react';

const WelcomeAlert = () => {
    useEffect(() => {
        alert("Welcome to you my website");
    }, []);

    // return (
    //     <>
    //         <div>
    //             <h4>Welcome to my website</h4>
    //             {/* Other content can go here */}
    //         </div>
    //     </>
    // );
};

export default WelcomeAlert;