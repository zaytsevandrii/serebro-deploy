import Image from "next/image"
import React, { useContext } from "react"
import img1 from "../public/collections/cart.svg"
import styles from "../styles/Cart.module.scss"
import Link from "next/link"
import CartItem from "../components/mainPage/Cart/CartItem"
import { Store } from "../utils/Store"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

function CartScreen()  {
    const router = useRouter()
    const { state, dispatch } = useContext(Store)
    const {
        cart: { cartItems },
    } = state

    
    return (
        <>
            <div className={styles.cart}>
                {cartItems.length === 0 ? (
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center  justify-content-center">
                                <h1>Корзина</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex align-items-center  justify-content-center">
                                <h2>Вы пока ничего не положили в корзину</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex align-items-center  justify-content-center">
                                <Image className={styles.empty} src={img1} alt="корзина" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex align-items-center  justify-content-center">
                                <p>Но это никогда не поздно исправить :)</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex align-items-center  justify-content-center">
                                <div className={styles.back}>
                                    <Link href="/">
                                        <button type="button" className="btn btn-dark p-2">
                                            Вернуться за покупками
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center  justify-content-center">
                                <h1>Корзина</h1>
                            </div>
                        </div>
                        <div className="row">
                            <p>Продолжить покупки</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mt-2">
                                {cartItems.map(item=>(
                                    <CartItem item={item} key={item.slug}/>
                                ))}
                            </div>

                            <div className="col-lg-4 mt-2">
                                <div className="card">
                                    <h5 className="card-header">Стоимость товаров без учета доставки</h5>
                                    <div className="card-body">
                                        <h5 className="card-title">Сумма покупки: {cartItems.reduce((a,c)=>a+c.quantity*c.price,0)} тенге</h5>
                                        <p className="card-text">
                                            Нужна помощь с заказом? <br /> 8 800 500 500
                                        </p>
                                        <button onClick={()=>router.push('/checkout')} className="btn btn-dark">
                                            ОФОРМИТЬ ЗАКАЗ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
