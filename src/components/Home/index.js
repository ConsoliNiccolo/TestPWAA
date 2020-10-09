// @flow
import { connect } from "react-redux";
import { Home } from "./presenter";
import { getLoginInfo } from "../../actions";

const mapStateToProps = (reducer) => {
  return {
    isLogged: reducer.loginReducer.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLoginInfo: () => dispatch(getLoginInfo())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
