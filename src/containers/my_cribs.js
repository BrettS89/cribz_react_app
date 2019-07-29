import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cribsActions from '../redux/actions/cribz';
import MyCribs from '../components/my_cribs';

function mapStateToProps(state) {
  return {
    state: {
      myCribs: state.cribs.myCribs,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...cribsActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCribs);
