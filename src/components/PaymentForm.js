import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';


 const PaymentForm = () => {
   const config = {
    public_key: 'FLWPUBK-796a103deb59564fb2210fa637ed13bf-A',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'interpercelservice@gmail.com',
      phonenumber: '08064180322',
      name: 'Ayodeji Adebayo',
    },
    customizations: {
      title: 'Lummy-store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically 
      // X
    },
    onClose: () => {},
  };

  return (
    <div className="App">
     <h1>Make payment here</h1>
      <FlutterWaveButton {...fwConfig} className='btn' />
    </div>
  );


  };
export default PaymentForm

