import React from 'react';
import Cards from '../components/Cards';
import data from "../backend/Data";
import './Home.css';

const Home = () => {
    return (
        <div className='container-fluid'>
            <h3 className='text-center mt-5 text-uppercase'>Loja Virtual</h3>
            <div className="container py-4">
                <div className="row">
                    {data.produtos.map((item, index) => {
                        return (
                            <Cards img={item.img} title={item.titulo} desc={item.desc} preco={item.preco} item={item} key={index} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Home 