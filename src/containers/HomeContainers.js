import { connect } from 'react-redux';
import { addToCart, removeToCart } from '../Services/Actions/action';
import Home from '../components/Home';

const mapStateToProps = state => ({
    data: state
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home;