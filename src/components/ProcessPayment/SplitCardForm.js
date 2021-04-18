import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";



const useOptions = () => {

  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: '16px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitCardForm = ({ handlePayment, orderService }) => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    //   const payload = await stripe.createPaymentMethod({
    //     type: "card",
    //     card: elements.getElement(CardNumberElement)
    //   });
    //   console.log("[PaymentMethod]", payload);
    // };


    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    });

    if (error) {
      setPaymentError(error?.message);
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod?.id)
      setPaymentError(null);
      handlePayment(paymentMethod?.id);

    }
  };



  return (
    <div >
      <h3 className="text-center">Pay Your Bill</h3>

      <div className='payMent'>
        <form onSubmit={handleSubmit} >
          <label style={{ width: '300px' }}>
            Card number
        <CardNumberElement
              className="form-control fld"
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={event => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label>
          <br />
          <label style={{ width: '300px' }}>
            Expiration date
        <CardExpiryElement
              className="form-control fld"
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={event => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label>
          <br />
          <label style={{ width: '300px' }}>
            CVC
        <CardCvcElement

              className="form-control fld"
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={event => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label>
          <br />
          <p>You have to pay $ {orderService?.price}</p>
          <button className='btn btn-dark mt-2 fw-bold text-uppercase mb-3' type="submit" disabled={!stripe}>
            Pay
      </button>
        </form>
        {
          paymentError && <p style={{ color: "black" }}>{paymentError}</p>
        }

        {
          paymentSuccess && <p style={{ color: "black" }}>Your Payment Was Successful</p>
        }
      </div>
    </div>
  );
};

export default SplitCardForm;