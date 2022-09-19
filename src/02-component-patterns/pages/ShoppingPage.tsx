import { useState } from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import { Product, ProductInCart } from '../interfaces';

import '../styles/custom-styles.css';

const product1 = {
  id: '1',
  title: 'Coffee Cabrales',
  img: './assets/coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffee Havanna',
  img: './assets/coffee-mug2.png'
}

const products: Product[] = [product1, product2];

export const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

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
        {/* <ProductCard className='bg-dark' product={product1} >
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title className='text-white text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard> */}

        {/* Otra forma de hacerlo */}
        {/* <ProductCard className='bg-dark' product={product1} >
          <ProductImage className='custom-image' />
          <ProductTitle className='text-white text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard> */}

        {/* Otra forma de hacerlo */}
        {/* <ProductCard product={product1} style={{ backgroundColor: '#70d1f8' }} >
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle style={{ fontWeight: 'bold' }} />
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
        </ProductCard> */}

        {
          products.map((product) => (
            <ProductCard
              className='bg-dark text-white'
              key={product.id}
              product={product}
            >
              <ProductImage
                className='custom-image'
                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
              />
              <ProductTitle className='text-bold' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }

      </div>

      <div className='shopping-cart'>
      <ProductCard
          className='bg-dark text-white'
          key={product2.id}
          product={product2}
          style={{ width: '100px' }}
        >
          <ProductImage
            className='custom-image'
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle className='text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
        <ProductCard
          className='bg-dark text-white'
          key={product1.id}
          product={product1}
          style={{ width: '100px' }}
        >
          <ProductImage
            className='custom-image'
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle className='text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
      </div>

    </div>
  )
}
