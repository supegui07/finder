import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FormSignIn from "./FormSignIn";

import { signIn } from "../../redux/auth/actions";

const mapStateToProps = ({ profile }) => ({ profile });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      onSignIn: signIn,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn);
