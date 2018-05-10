import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getBatches, addBatch} from '../../actions/batches'
import ButtonBase from 'material-ui/ButtonBase'
import {Redirect} from 'react-router-dom'
import NewBatchForm from './NewBatchForm'
import Card from 'material-ui/Card'

class Homepage extends PureComponent {

  componentWillMount(){
    if (this.props.authenticated) {
      this.props.getBatches()
    }
  }

  render(){
    const {batches, authenticated} = this.props

    if (!authenticated) return (
      <Redirect to="/login" />
    )

    return(
      <div>
        <div className="HomepageHeader">

          <h1>/ All Batches /</h1>
          <p>Your teaching journey starts here!</p>

          <svg class="jss177" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="rgba(255, 255, 255, 0.6)"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>

        </div>

        <Card className='outer-paper newBatch'>

          <h2>Create New Batch</h2>
          <NewBatchForm onSubmit={this.props.addBatch}/>

        </Card>
        <div className="CardContainer">

          { batches.map(batch =>
            <Card className= "batchCard" key={batch.id}>
              <ButtonBase onClick={() => window.location = `batches/${batch.id}`}>
                <h1>Batch {batch.batchNum}</h1>
              </ButtonBase>
            </Card>
          )}

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.currentUser !== null,
  batches: state.batches
})

export default connect (mapStateToProps, {getBatches, addBatch})(Homepage)
