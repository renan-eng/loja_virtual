import React from 'react'
import './Cards.css'

const Cards = (props) => {
    return (
        <>
            {/* Primeiro Item Lista de Produtos */}
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <div className="card h-100 shadow rounded">
                    <img src={props.img} alt="" className="card-img-top img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <button className='btn btn-success'>Colocar no Carrinho</button>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Cards