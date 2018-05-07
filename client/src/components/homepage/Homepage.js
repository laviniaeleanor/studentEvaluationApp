import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getBatches} from '../../actions/batches'
import {Link} from 'react-router-dom'
import NewBatchForm from './NewBatchForm'
import Paper from 'material-ui/Paper'

class Homepage extends PureComponent {

    componentWillMount(){
        this.props.getBatches()
    }

    render(){
        const {batches} = this.props

        return(
            <Paper className="outer-paper">
            <h1>Homepage</h1>
            <NewBatchForm />
            { batches.map(batch =>
                <div className= "batchContainer">
                <Link to={`/batches/${batch.id}`}><h2>Batch {batch.batchNum}</h2></Link>
                </div>
            )}
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    batches: state.batches
})

export default connect (mapStateToProps, {getBatches})(Homepage)
