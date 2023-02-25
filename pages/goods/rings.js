import React from "react"
import styles from "../../styles/Rings.module.scss"

const rings = () => {
    return (
        <>
            <div className={styles.rings}>
                <div className="container">
                    <div className="row ">
                        <div className="col-3 filtrMenu d-lg-block d-none fixed-left" >
                           Тут будет фильтрация
                        </div>
                        <div className="col-lg-9 col-12  mt-2">
                            <div className="row">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default rings
