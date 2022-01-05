import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import Link from "next/link";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";

export default function Product({ products }) {
  return (
    <ItemStyles>
      <img
        src={products?.photo?.image?.publicUrlTransformed}
        alt={products.name}
      />
      <Title>
        <Link href={`/product/${products.id}`}>{products.name}</Link>
      </Title>
      <PriceTag>{formatMoney(products.price)}</PriceTag>
      <p>{products.description}</p>
    </ItemStyles>
  );
}
