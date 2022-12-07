import './CarrinhoDeCompras.css'
import { useCart } from 'react-use-cart'

const Carrinho = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h5 className='text-center py-5'>Carrinho está vazio</h5>
    return (
        <div className='container-fluid py-5'>
            <div className="row justify-content-center">
                <h4 className="text-center py-3 text-decoration-underline fw-bolder">Meu Carrinho</h4>
                <div className="col-12">
                    <div className="d-flex">
                        <h4 className='position-relative fw-bolder text-title fs-5'>Carrinho
                            <span className='position-absolute translate-middle rounded-pill badge bg-danger mx-2'>{totalUniqueItems}</span>
                        </h4>
                        <p className='fw-bolder text-title fs-5'>Total
                            <span className='position-absolute translate-middle rounded-pill badge bg-danger mx-2'>{totalItems}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrinho