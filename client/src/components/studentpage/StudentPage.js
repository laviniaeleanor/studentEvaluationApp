import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudent} from '../../actions/batches'
import {getEvaluations} from '../../actions/evaluations'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import NewEvaluation from './NewEvaluation'

class StudentPage extends PureComponent {

    componentWillMount(){
        this.props.getStudent(this.props.match.params.id)
        this.props.getEvaluations(this.props.match.params.id)
    }

    render(){
        const {batch, student, evaluations} = this.props

        return(
            <Paper className="outer-paper">
            <h1>{student.name}</h1>
            <NewEvaluation />
            { evaluations.map(evaluation =>
                <div className= "evaluationsContainer">
                <h2>{evaluation.date} : {evaluation.evaluation}</h2>
                </div>
            )}
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    student: state.student,
    evaluations: state.evaluations
})

export default connect (mapStateToProps, {getStudent, getEvaluations})(StudentPage)
