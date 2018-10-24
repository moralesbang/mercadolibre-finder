import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

const mapStateToProps = state => ({
  products: state.products.items,
  isFetching: state.products.isFetching
})

export default connect(mapStateToProps)(ProductList)