
import React, { useEffect, useRef } from 'react'

function PayPal() {
    const paypal=useRef()

    useEffect(()=>{
         window.paypal.Buttons({
          createOrder:(data,actions,err)=>{
            return actions.order.create({
                intent:"CAPTURE",
                purchase_units:[
                    {
                        description:"Cool looking table",
                        amount:{
                            currency_cod:"USD",
                            value:500.00
                        }
                    }
                ]
            })
          },
           onApprove:async (data,actions)=>{
            const order=await actions.order.capture();
           },
           onError:(err)=>{
            console.log(err)
           }
         }).render(paypal.current)
    },[])
  return (
    <div>
        <div ref={paypal }></div>
    </div>
  )
}

export default PayPal