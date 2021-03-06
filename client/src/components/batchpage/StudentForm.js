import React, { PureComponent } from 'react'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'

export default class StudentForm extends PureComponent {

    state = {}

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.onSubmit(this.state)
    }

    handleChange = (e) => {
      const {name, value} = e.target
      this.setState({
        batch: this.props.batch.id,
        [name] : value
      })
    };

    render() {
      const initialValues = this.props.initialValues || {}

      return(
        <form onSubmit={this.handleSubmit} className="NewBatchForm">

          <h3>Insert full name and picture url:</h3>
          
          <TextField
            id='name'
            name='name'
            label='Student Name'
            value={this.state.name || initialValues.name || ''}
            onChange={this.handleChange}
          />

          <TextField
            id='picture'
            name='picture'
            label='Add a picture'
            value={this.state.picture || initialValues.picture || ''}
            onChange={this.handleChange}
          />

          <Button
            type='submit'
            color="secondary"
            variant="raised"
            className="addStudent"
          > Save </Button>

        </form>
      )
    }
}
