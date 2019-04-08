'use strict'

class App extends React.PureComponent {
  render () {
    const sortedProducts = this.props.products.sort((a, b) => b.price - a.price)

    return (
      <div>
        <header>
          Marcelo & Anna&#39;s Garage Sale
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
    'pt-BR',
    { style: 'currency', currency: 'BRL' }
  )

  return (
    <a href={p.url} target="_blank">
      <div className="product">
        <img src={p.imageUrl} />
        <div className="product-details">
          <h3>{p.name}</h3>
          <span className="discount">
            {Math.round(100 - (p.price / p.originalPrice * 100))}%
          </span>
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
