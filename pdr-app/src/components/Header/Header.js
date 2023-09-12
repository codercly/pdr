import React from "react"
import classes from './header.module.css'// se tiver dois nomes de classes dentro de diferentes componentes não ira afetar um ao outro
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
export function Header() {
    //para o login
    const {user, logout} = useAuth()
    //para o cart
    const { cart } = useCart()

    

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>PDR BURGER</Link>
                <nav>
                    <ul>
                        {user ? (
                            <li className={classes.menu_container}>
                                <Link to="/profile">{user.name}</Link>
                                <div className={classes.menu}>
                                    <Link to="/profile">Perfil</Link>
                                    <Link to="/orders">Pedidos</Link>
                                    <a onClick={logout}>Sair</a>
                                </div>
                            </li>
                        ) : (
                            <Link to="/login">Entrar</Link>
                        )}
                        <li>
                            <Link to="/cart">
                                Cart
                                {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}