export default function ProductCard({product}) {
  return (
    <>
      
      <img src={product.imageURL}/>
      <h3>{ProductCard.name}</h3> 
      <p>{ProductCard.description}</p>
      <div className="price">{ProductCard.price}</div> 
      {ProductCard.isInStock == false && <p>Unavailable</p>}    

      <button>Add to Cart</button>
    </>
  );
}
