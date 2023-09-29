import Header from '../components/Header';
import { connect } from 'react-redux';
import { addToCart } from '../Services/Actions/action';
// import Home from '../components/Home';

const mapStateToProps = state => ({
    data: state
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;