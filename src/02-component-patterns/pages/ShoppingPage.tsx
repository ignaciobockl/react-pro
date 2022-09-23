import { useState } from 'react';

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import { OnChangeArgs, Product, ProductInCart } from '../interfaces';

import '../styles/custom-styles.css';

const product1 = {
  id: '1',
  title: 'Coffee Cabrales',
  img: './assets/coffee-mug.png'
};

const product2 = {
  id: '2',
  title: 'Coffee Havanna',
  img: './assets/coffee-mug2.png'
};

const products: Product[] = [product1, product2];

export const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: OnChangeArgs) => {
    setShoppingCart(oldShoppingCart => {
      // UNA FORMA DE HACERLO
      // sumar o crear un producto
      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      }
      // borrar o restar un producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return {...rest};


      // OTRA FORMA DE HACERLO
      // if (count === 0) {
      // const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      // return rest;
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count }
      // }
    });
  }

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
              onChange={onProductCountChange}
              product={product}
              value={shoppingCart[product.id]?.count || 0}
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
        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              className='bg-dark text-white'
              key={key}
              onChange={onProductCountChange}
              product={product}
              style={{ width: '100px' }}
              value={product.count}
            >
              <ProductImage
                className='custom-image'
                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
              />
              <ProductButtons
                className='custom-buttons'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
            </ProductCard>
          ))
        }
      </div>

      {/*<div>
        <code>
          {JSON.stringify(shoppingCart, null, 5)}
        </code>
      </div> */}

    </div>
  )
}
