import Stripe from 'stripe'



export const stripe = require('stripe')('sk_test_51N1ZubAWPPVVTfNWwst37sfvCubjrWC8sD8eMnpTZZwi0jWEpuaS9YyixPyJ3mE1FnEyyn0caZa6MKyZNEeSwbKq00lMcS7tIK', {
    apiVersion: '2022-11-15',
    appInfo:{
        name: 'Ignite Shop',

    }
  });

/*
 export const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15',
    appInfo:{
        name: 'Ignite Shop',

    }
})
*/