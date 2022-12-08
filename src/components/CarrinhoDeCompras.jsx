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
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
                    <div className="d-flex justify-content-center py-4">
                        <p className='position-relative fw-bolder text-title mx-4'>Carrinho<span className='position-absolute translate-middle rounded-pill badge bg-danger mx-2'>{totalUniqueItems}</span></p>
                        <p className='fw-bolder text-title mx-4'>Total <span className='position-absolute translate-middle rounded-pill badge bg-success mx-2'>{totalItems}</span></p>
                    </div>
                    <div className=''>
                        <table className="table table-ligth table-hover m-0">
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index} className='align-middle'>
                                            <td><img src={item.img} className="img-cart" alt={item.titulo} /></td>
                                            <td>{item.titulo}</td>
                                            <td>R$ {item.price}</td>
                                            <td>Quantidade: {item.quantity}</td>
                                            <td>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-outline-dark ms-1'>-</button>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-outline-dark ms-1'>+</button>
                                                <button onClick={() => removeItem(item.id)} className='btn btn-outline-danger ms-5'>Remover Item</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className='d-flex justify-content-between py-5 pb-0'>
                        <button className="btn btn-outline-danger" onClick={(item) => emptyCart(item.id)}>Remover Todos</button>
                        <h3>Preço Total: R$ {cartTotal}</h3>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className="btn btn-outline-success" onClick="#">Comprar</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Carrinho