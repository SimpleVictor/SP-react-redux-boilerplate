import * as React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter';

const Home = props => (
  <div className="container">
    <div className="row">
        <div className="twelve column">
            <h1>Home</h1>
        </div>
    </div>

    <div className="row">
        <div className="twelve column">
            <p>Count: {props.count}</p>
        </div>
    </div>

    <div className="row">
        <div className="six columns">
            <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
        </div>
        <div className="six columns">
            <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
        </div>
    </div>

      <div className="row">
          <div className="six columns">
              <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
          </div>
          <div className="six columns">
              <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
          </div>
      </div>

      <div className="row">
          <div className="twelve columns">
              <button onClick={() => props.changePage()}>Go to about page via redux</button>
          </div>
      </div>

  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
