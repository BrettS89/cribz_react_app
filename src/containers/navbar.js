import { connect } from 'react-redux';
import Navbar from '../components/navbar';

function mapStateToProps(state) {
  return {
    state: {
      isLoggedIn: state.app.isLoggedIn,
      currentPage: state.app.currentPage,
    },
  };
}

export default connect(mapStateToProps)(Navbar);
