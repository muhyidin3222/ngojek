import { connect } from "react-redux";
import Home from "../screens/home";
import { numberChange } from '../actions'

const mapStateToProps = (state) => {
    const { number } = state.reducer
    return { number }
}

const mapActionCreators = {
    numberChange
};
export default connect(mapStateToProps, mapActionCreators)(Home); 