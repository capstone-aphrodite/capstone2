import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Login,
  Signup,
  Posenet,
  ExerciseLibrary,
  SingleExercise,
  ChildDashboard,
  FamilyDashboard,
  Navbar,
} from './Components';
import { authMe } from './Store';
import { connect } from 'react-redux';

class Routes extends Component {
  async componentDidMount() {
    await this.props.authMe();
  }
  render() {
    console.log('this.props routes', this.props);
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Posenet} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/exercises" component={ExerciseLibrary} />
          <Route exact path="/exercises/:id" component={SingleExercise} />
          <Route exact path="/childdashboard" component={ChildDashboard} />
          <Route path="/home" component={FamilyDashboard} />
        </Switch>
      </div>
    );
  }
}

const mapState = state => {
  console.log(state);
  return {
    isLoggedIn: !!state.user,
  };
};

const mapDispatch = dispatch => {
  return {
    authMe: () => dispatch(authMe()),
  };
};

export default connect(mapState, mapDispatch)(Routes);
