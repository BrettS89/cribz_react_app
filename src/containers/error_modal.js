import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ErrorModal from '../components/error_modal';
import * as appActions from '../redux/actions/app';

function mapStateToProps(state) {
  return {
    state: {
      isError: state.app.isError,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...appActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
