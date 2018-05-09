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
            <div>
            <div className="HomepageHeader">
            <h1>/ All Batches /</h1>
            <p>Your teaching journey starts here!</p>
            <svg class="jss177" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="rgba(255, 255, 255, 0.6)"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>
            </div>
            <NewBatchForm />
            { batches.map(batch =>
                <div className= "batchContainer">
                <Link to={`/batches/${batch.id}`}><h2>Batch {batch.batchNum}</h2></Link>
                </div>
            )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    batches: state.batches
})

export default connect (mapStateToProps, {getBatches})(Homepage)
