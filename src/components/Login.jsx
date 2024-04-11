import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login({setIsAuth, setToken}) {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[fio,setFio]=useState('')
    const[error,setError]=useState('')
    const navigate = useNavigate()

    function login(event){
        event.preventDefault()
        fetch('https://api-shop.edu.alabuga.space/api-shop/login',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({email, password})
        })
        .then(data => data.json())
        .then(data => {
            if (data.data){
                setIsAuth(true)
                setToken(data.data.user_token)
                navigate('/')
                console.log(data.data.user_token)
            } else {
                setError(data.error.message)
            }
        })
    }

  return (
    <main>
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal">Авторизация</h1>
        </div>
        
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
            <div className="col">
                <div className="row">
                    <p className='text-danger'>{error}</p>
                    <form>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
                            value={email}
                            onChange={event => setEmail(event.target.value)}/>
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                            value={password}
                            onChange={event => setPassword(event.target.value)}/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-success mb-3" type="submit" onClick={login}>Войти</button>
                        <button className="w-100 btn btn-lg btn-outline-secondary" type="submit" onClick={()=>navigate('/')}>Назад</button>
                    </form>
                </div>

            </div>
        </div>
    </main>  )
}
