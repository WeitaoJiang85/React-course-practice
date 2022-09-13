import React from 'react'
import ProductPrice from './ProductPrice.js'

const App = () => {
  return (
    <div className="container">
      <h1>Fancy Florist</h1>
      <ProductPrice
        name="Congratulations Bouquet"
        img="https://previews.123rf.com/images/rawpixel/rawpixel1707/rawpixel170711105/81634524-congratulation-card-with-flower-bouquet.jpg"
        description="The perfect bouquet for a celebration such as a birthday or graduation."
        price={70}
        sale={true}
      />
      <ProductPrice
        name="Apology Bouquet"
        img="https://ozflowerdelivery.com.au/wp-content/uploads/2021/12/apology-flowers.png"
        description="You need something extra when you know you messed up."
        price={150}
        sale={false}
      />
      <ProductPrice
        name="Wedding Bouquet"
        img="https://greenweddingshoes.com/wp-content/uploads/2020/04/winter_bouquet_anemones_gold_palms.jpg"
        description="Beautiful collection of flowers to turn heads on your special day!"
        price={200}
        sale={true}
      />
    </div>
  )
}

export default App
