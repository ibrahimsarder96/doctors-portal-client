import React from 'react';
import { CardElement, useStripe, useElements} from'@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();


  const handleSubmit= event => {
    event.preventDefault()

    if(!stripe || ! elements){
      return
    }
    
    const card = elements.getElement(CardElement);
    if(card === null) {
      return
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-sm btn-success mt-4' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    </div>
  );
};

export default CheckoutForm;