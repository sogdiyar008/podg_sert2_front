import React from 'react'
import {Link} from 'react-router-dom'

export default function Headers({isAuth, setIsAuth, token}) {


    function logout(){
        fetch('https://api-shop.edu.alabuga.space/api-shop/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        setIsAuth(false)
    }

  return (
    <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <Link to={'/'} className="d-flex align-items-center text-dark text-decoration-none">
                <span className="fs-4">«MyShop»</span>
            </Link>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                {isAuth ? 
                <>
                <Link className="me-3 py-2 text-dark text-decoration-none" to={'/cart'}>Мои заказы</Link>
                <Link className="me-3 py-2 text-dark text-decoration-none" to={'/order'}>Корзина</Link>
                <Link to={'/'} className="me-3 py-2 text-dark text-decoration-none" onClick={logout} >Выйти</Link>
                </>:<>
                <Link className="me-3 py-2 text-dark text-decoration-none" to={'/reg'}>Регистрация</Link>
                <Link className="me-3 py-2 text-dark text-decoration-none" to={'/log'}>Авторизация</Link>
                </>}
            </nav>
        </div>
    </header>
  )
}
