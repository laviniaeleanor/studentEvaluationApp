import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../../actions/users'
import SignupForm from './SignupForm'
import {Redirect} from 'react-router-dom'
import Paper from 'material-ui/Paper'

class SignupPage extends PureComponent {

	handleSubmit = (data) => {
	  const { userName, email, password } = data
	  this.props.postSignup(userName, email, password)
	}

	render() {
	  if (this.props.signup.success) return (
	    <Redirect to="/login" />
	  )

	  return (
	    <Paper className="SignIn">
	      <h1>Sign up</h1>

	      <SignupForm onSubmit={this.handleSubmit} />

	      <p style={{color:'red'}}>{ this.props.signup.error }</p>
	    </Paper>
	  )
	}
}

const mapStateToProps = function (state) {
  return {
    signup: state.signup
  }
}

export default connect(mapStateToProps, {postSignup: signup})(SignupPage)
