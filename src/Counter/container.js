import { connect } from 'react-redux'

import Counter from './component'
import { increment } from '../ducks/counter'

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  increment: _ => dispatch(increment())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
