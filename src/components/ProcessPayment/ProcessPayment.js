import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51Ie5hbAmn5naFKLhBKxWwIXlTaGjoeHtgxkkGUxasLm1sAmqsAauDidchexCeExedxDrrgco5C4mfiSCMn0iFn3L00PbxUrm5N');

const ProcessPayment = ({handlePayment,orderService}) => {
    return (
        <Elements stripe={stripePromise}>
           <SplitCardForm handlePayment = {handlePayment} orderService={orderService}></SplitCardForm>
        </Elements>
    );
};

export default ProcessPayment;