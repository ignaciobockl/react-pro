import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Cabrales',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>

        {/* Una forma de hacerlo */}
        <ProductCard className='bg-dark' product={product} >
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title className='text-white text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        {/* Otra forma de hacerlo */}
        <ProductCard className='bg-dark' product={product} >
          <ProductImage className='custom-image' />
          <ProductTitle className='text-white text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        {/* Otra forma de hacerlo */}
        <ProductCard
          product={product}
          style={{
            backgroundColor: '#70d1f8',
          }}
        >
          <ProductImage
            style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
            }}
          />
          <ProductTitle
            style={{
              fontWeight: 'bold',
            }}
          />
          <ProductButtons 
            style={{
              display: 'flex',
              justifyContent: 'end',
            }}
          />
        </ProductCard>

      </div>

    </div>
  )
}
