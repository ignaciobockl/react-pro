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
        <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        {/* Otra forma de hacerlo */}
        <ProductCard className='bg-dark' product={product} >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

      </div>

    </div>
  )
}
