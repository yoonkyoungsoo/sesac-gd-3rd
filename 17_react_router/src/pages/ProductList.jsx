import ProductItem from "../components/ProductItem";

export default function ProductList({ prodData }) {
  return (
    <div>
      {prodData.map((prod) => {
        return <ProductItem key={prod.id} prod={prod} />;
      })}
    </div>
  );
}
