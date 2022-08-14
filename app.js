'use strict'

class App extends React.PureComponent {
  render () {
    const sortedProducts = this.props.products.sort((a, b) => a.price - b.price)

    return (
      <div>
        <header>
          Venta de Cositas de Milena & Julian
        </header>
        <h3 className="subtitle">
          Se aceptan pagos por <b>Nequi, Colpatria, efectivo o Paypal</b>
          <p>Al hacer clic sobre las imagenes encontrás mas información</p>
        </h3>
        <ProductList products={sortedProducts} />
      </div>
    )
  }
}

const ProductList = props => {
  return (
    <div className='container'>
    {
      props.products.map((p, i) =>
        <ProductCard key={i} product={p} />
      )
    }
    </div>
  )
}

const ProductCard = props => {
  const p = props.product
  const formatPrice = p => p.toLocaleString(
    'es-CO',
    { style: 'currency', currency: 'COP' , maximumFractionDigits: '0'},
  )
  const discount = Math.round(100 - (p.price / p.originalPrice * 100))

  const goWhatsapp = () => window.open(`https://api.whatsapp.com/send?phone=+573006815916&text=Hola%2C%20estoy interesado en%20${p.name}`, '_blank')

  return (
      <div className="product">
        <a href={p.url} target="_blank">
          {p.sold && <div className="sold">VENDIDO</div>}
          {p.reserved && <div className="reserved">RESERVADO</div>}
          {p.available && <div className="available">DISPONIBLE</div>}
          <img className="product-img" src={p.imageUrl} />
        </a>
        <div className="product-details">
          <h3>{p.name}</h3>
          {discount > 0 && <span className="discount">-{discount}%</span>}
          <ul>
            {p.details.map(detail => <li>{detail}</li>)}
          </ul>
        </div>
        <div onClick={goWhatsapp} className="box-price">
          <span className="price">{formatPrice(p.price)}</span>
          <div className="box">
            <img className="icon" src="./whatsapp-icon.png"/>
            <button className="payment">Comprar</button>
          </div>
        </div>
      </div>
  );
}

ReactDOM.render(
  <App products={products} />,
  document.getElementById('root')
)
