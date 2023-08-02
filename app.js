'use strict'

class App extends React.PureComponent {
  render () {
    //const sortedProducts = this.props.products.sort((a, b) => a.price - b.price)

    return (
      <div>
        <header>
          Venta de Cositas de<br/>Milena & Julian
        </header>
        <h3 className="subtitle">
          Se aceptan pagos por Nequi, Colpatria, Efectivo o Paypal. Solo Bogota.
          <h4>(Algunas fechas de entrega podrian variar por algunos días)</h4>
          <p>Al hacer clic/tocar sobre las imagenes encontrás mas información de producto</p>
        </h3>
        <ProductList products={this.props.products} />
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
          {
            p.state == "sold" ?
            <span className="product-span">
              <div className="sold">VENDIDO</div>
              <img className="product-img-filter-sold" src={p.imageUrl} loading="lazy"/>
            </span>
            : ''
          }
          {
            p.state == "reserved" ?
            <span className="product-span">
              <div className="reserved">RESERVADO</div>
              <img className="product-img-filter-reserved" src={p.imageUrl} loading="lazy"/>
            </span>
            : ''
          }
          {
            p.state == "notavailable" ?
            <span className="product-span">
               <div className="notavailable">NO DISPONIBLE</div>
               <img className="product-img-filter-notavailable" src={p.imageUrl} loading="lazy"/>
            </span>
            : ''
          }
          {
            p.state == "available" ?
            <span className="product-span">
               <div className="available">DISPONIBLE</div>
               <img className="product-img" src={p.imageUrl} loading="lazy"/>
            </span>
            : ''
          }
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

// Load the data.json file and parse it
fetch('./data.json')
  .then(response => response.json())
  .then(productsData => {
    // Assuming the JSON contains an array of products
    const products = productsData;
    ReactDOM.render(
      <App products={products} />,
      document.getElementById('root')
    );
  });
