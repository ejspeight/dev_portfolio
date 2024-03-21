"use client";


import React, { useState }  from 'react';
import { FiCopy } from "react-icons/fi";


const EmailCopyButton = () => {

    const emailAddress = 'ej.speight@gmail.com';
    const [isCopied, setIsCopied] = useState(false);

    const handleEmailCopy = () => {
        navigator.clipboard.writeText(emailAddress)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 1000); 
            })
            .catch(err => {
                console.error('Error copying email to clipboard:', err);
                alert('Failed to copy email to clipboard. Please try again.');
            });
            };

    return (
        <div className={`border-neutral-300 dark:border-neutral-700/50 shadow-md border w-fit h-8 px-2 rounded-md flex items-center gap-x-2 hover:cursor-pointer ${isCopied ? 'bg-[#28C780]' : ''} transition duration-500`} onClick={handleEmailCopy}>
            <FiCopy className="" />
            <span className="text-neutral-700 dark:text-white font-semibold">
                {isCopied ? 'Email Copied!' : 'Copy Email'}
            </span>
        </div>
    );
};

export default EmailCopyButton;

