import Image from "next/image"
import Link from "next/link"
import React, { useContext } from "react"
import { Store } from "../../utils/Store"

const ProductItem = ({ product }) => {
    const {state,dispatch} = useContext(Store)
    return (
        <li className="col-md-4 col-6">
            <div className="card border-0 p-1">
                <Link href={`/product/${product.slug}`}>
                    <Image src={product.image} alt="ring" className="d-block w-100 h-auto" width={400} height={400} /></Link>
                    <div className="card-body p-2">
                        <h6>{product.name}</h6>
                        <p className="card-text">{product.price} тенге</p>
                       {/*  <button type="button" className="btn btn-dark w-100" >
                            Добавить 
                        </button> */}
                    </div>
                
            </div>
        </li>
    )
}

export default ProductItem
