import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getClasses} from '../../actions/classes'
import {Link} from 'react-router-dom'
import NewClassForm from './NewClassForm'
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
            <NewClassForm />
            { classes.map(batch =>
                <div className= "batchContainer">
                <Link to={`/classes/${batch.id}`}><h2>Batch {batch.batchNum}</h2></Link>
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
