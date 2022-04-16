import React, { useMemo } from 'react'
import { ProductType } from '../../interface/interface';
import ProductListItem from './ProductListItem/ProductListItem';
import './ProductListView.css';

type Props = {
    products: ProductType[];
    setSelectedProduct: (product: ProductType) => void;
    isFiltered: boolean;
    productLine: string;
}
const ProductListView: React.FC<Props> = ({ products, setSelectedProduct, isFiltered, productLine }) => {

    const productList = useMemo(() => isFiltered
        ? products.filter((product) => productLine === product.line.name)
        : products,
        [isFiltered, products, productLine]
    )

    return (
        <main className="products-container--list">
            <div className="products-container__headers">
                <p>{productList.length}</p>
                <p>PRODUCT LINE</p>
                <p>Name</p>
            </div>
            <ul>
                {productList.map((product, index) => (
                    <ProductListItem
                        key={index}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                    />
                ))}
            </ul>
        </main>
    )
}

export default ProductListView