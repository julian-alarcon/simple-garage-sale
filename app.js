'use strict'

class App extends React.PureComponent {
  render () {
    const sortedProducts = this.props.products.sort((a, b) => a.price - b.price)

    return (
      <div>
        <header>
          Venta de Cositas de Milena & Julian
        </header>
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
    { style: 'currency', currency: 'COP' }
  )
  const discount = Math.round(100 - (p.price / p.originalPrice * 100))

  return (
    <a href={p.url} target="_blank">
      <div className="product">
        {p.sold && <div className="sold">VENDIDO</div>}
        {p.reserved && <div className="reserved">RESERVADO</div>}
        {p.available && <div className="available">DISPONIBLE</div>}
        <img src={p.imageUrl} />
        <div className="product-details">
          <h3>{p.name}</h3>
          {discount > 0 && <span className="discount">-{discount}%</span>}
          <ul>
            {p.details.map(detail => <li>{detail}</li>)}
          </ul>
        </div>
        <div className="price">
          {formatPrice(p.price)}
        </div>
      </div>
    </a>
  )
}

ReactDOM.render(
  <App products={products} />,
  document.getElementById('root')
)
