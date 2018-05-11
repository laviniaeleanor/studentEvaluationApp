import React, { PureComponent } from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

export default class NewBatchForm extends PureComponent {

    state = {}

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.onSubmit(this.state)
    }


    handleChange = (e) => {
      const {name, value} = e.target
      this.setState({
        [name] : value
      })
    }

    render() {

      return(
        <form onSubmit={this.handleSubmit} className="NewBatchForm">

          <TextField
            id='batch'
            name='batchNum'
            label='Batch Number'
            value={this.state.batchNum || ''}
            onChange={this.handleChange}
          />

          <TextField
            id='startDate'
            name='start'
            label='Start Date'
            value={this.state.start || ''}
            onChange={this.handleChange}
          />

          <TextField
            id='endDate'
            name='end'
            label='End Date'
            value={this.state.end || ''}
            onChange={this.handleChange}
          />

          <Button
            type='submit'
            variant="raised"
            className="addBatch"
          >Add batch
          </Button>

        </form>
      )
    }
}
