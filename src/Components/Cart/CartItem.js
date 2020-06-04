import React from 'react'

export default function CartItem({item, value}) {
    const {id,title,img,price,total,count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row my-1 text-capitalize text-center">
            {/**First Column */}
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width: '5rem', height: "5rem"}} className="img-fluid" alt="product"/>
            </div>

            {/**Second Column */}
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">
                    Product:
                </span>
                    {title}
            </div>

            {/**Third Column */}
            <div className="col-10 mx-auto col-lg-2">
   
            </div>

            {/**Fourth Column */}
            <div className="col-10 mx-auto col-lg-2">
   
            </div>


        </div>
    )
}
