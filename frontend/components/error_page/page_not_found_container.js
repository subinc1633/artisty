import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PageNotFound from './page_not_found';

export default withRouter(connect())(PageNotFound);