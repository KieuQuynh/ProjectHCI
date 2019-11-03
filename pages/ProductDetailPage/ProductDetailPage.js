import TitlePage from '../../src/components/Share/TitlePage/TitlePage'
import ProductDetail from '../../src/components/ProductDetail/ProductDetail/ProductDetail'
import ProductRelative from '../../src/components/ProductDetail/ProductRelative/ProductRelative'
import ProductDescription from '../../src/components/ProductDetail/ProductDescription/ProductDescription'

const ProductDetailPage = props => {
  return (
    <div className="product_detail_page">
      <TitlePage title="SHOP"></TitlePage>
      <ProductDetail></ProductDetail>
      <ProductDescription></ProductDescription>
      <ProductRelative></ProductRelative>
    </div>
  )
}

export default ProductDetailPage
