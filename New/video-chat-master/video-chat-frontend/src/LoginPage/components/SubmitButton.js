import React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';


const SubmitButton = ({ handleSubmitButtonPressed }) => {
  return (
    <div className='login-page_button_container'>
      <PrimaryButton text="New Meeting" onClick={handleSubmitButtonPressed} >
      </PrimaryButton>
    </div>

  );
};

export default SubmitButton;
