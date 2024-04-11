import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Orders({token}) {
    const navigate = useNavigate()
    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://api-shop.edu.alabuga.space/api-shop/order',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(data => data.json())
        .then(data => setOrders(data.data))
    },[])


    useEffect(()=>{
        fetch('https://api-shop.edu.alabuga.space/api-shop/products')
        .then(data => data.json())
        .then(data => setProducts(data.data))
    },[])

    const printOrders = orders.map((order, index) => {
        let sum=0;
        return(
            <div key={index} className="row row-cols-1 row-cols-md-3 mb-3 text-center bg-light" >
            <h2 className="w-100">Заказ №{order.id}</h2>
            {products.map(product=>{
                for (let productID of order.products){ 
                    if (productID === product.id){
                        sum+=product.price
                        return(
                            <div className="col">
                                <div className="card mb-4 rounded-3 shadow-sm">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 fw-normal">{product.name}</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">{product.price} Сом<small className="text-muted fw-light"> &times; 1 шт.</small></h1>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </div>         
                        ) 
                    }
                }
            })}
            <h2 className="w-100">Итоговая стоимость: {sum} Сом</h2>
        </div>
        )
    })


  return (
    <main>
        {printOrders}
        <div className="row justify-content-center gap-1">
            <button className="col-6 btn btn-lg btn-outline-secondary mb-3" type="button" onClick={()=>navigate('/')}>Назад</button>
        </div>
    </main>  
    )
}