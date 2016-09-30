import {connect} from 'react-redux';
import Stream from './stream';

const mapStateToProps = (state) => ({
  state: state
});


export default connect(mapStateToProps)(Stream);
