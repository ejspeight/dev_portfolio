import React from 'react';
import { FiCopy } from "react-icons/fi";

const EmailCopyButton = () => {

    const emailAddress = 'ej.speight@gmail.com'

    const handleEmailCopy = () => {
        navigator.clipboard.writeText(emailAddress)
            .then(() => {
                console.log('Email copied:', emailAddress);
                alert('Email Copied')     
            })
            .catch(err => {
                console.error('Error copying email to clipboard:', err);
                alert('Failed to copy email to clipboard. Please try again.');
            });
    };

    return (
        <div className="border-neutral-300 dark:border-neutral-700/50 shadow-md border w-fit h-8 px-2 rounded-md flex items-center gap-x-2" onClick={handleEmailCopy}>
          <FiCopy className="" />
          <span className="text-neutral-700 dark:text-white font-semibold">
            Copy Email
          </span>
        </div>
      );

};

export default EmailCopyButton;