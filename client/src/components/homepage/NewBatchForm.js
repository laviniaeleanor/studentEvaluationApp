import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {addBatch} from '../../actions/batches'


class NewBatchForm extends PureComponent {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addBatch(this.state)
    }


    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({
          [name] : value
        })
      };

    render() {

        return(
            <form onSubmit={this.handleSubmit}>
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
                    color="secondary"
                    variant="raised"
                    className="create-quiz"
                >
                    Add batch
                </Button>
            </form>
        )
    }
}


const mapStateToProps = function (state) {
	return {
        batches: state.batches
	}
}

export default connect(mapStateToProps, {addBatch})(NewBatchForm)
