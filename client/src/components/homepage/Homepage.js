import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getClasses} from '../../actions/classes'
import Paper from 'material-ui/Paper'

class Homepage extends PureComponent {

    componentWillMount(){
        this.props.getClasses()
    }

    render(){
        const {classes} = this.props

        return(
            <Paper className="outer-paper">
            <h1>Homepage</h1>
            { classes.map(batch =>
                <div className= "batchContainer">
                <h2>Batch {batch.batchNum}</h2>
                </div>
            )}
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    classes: state.classes
})

export default connect (mapStateToProps, {getClasses})(Homepage)
