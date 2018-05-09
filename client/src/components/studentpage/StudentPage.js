import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudent, updateStudent} from '../../actions/students'
import {getEvaluations} from '../../actions/evaluations'
import {Link} from 'react-router-dom'
import StudentForm from '../batchpage/StudentForm'
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper'
import NewEvaluation from './NewEvaluation'

class StudentPage extends PureComponent {

    state = {
        edit: false
    }

    componentWillMount(){
        this.props.getStudent(this.props.match.params.id)
        this.props.getEvaluations(this.props.match.params.id)
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    updateStudent = (student) => {
        this.props.updateStudent(this.props.match.params.id, student)
        this.toggleEdit()
    }

    render(){
        const {batch, student, evaluations} = this.props

        return(
            <Paper className="outer-paper">
                <h1>{student.name}</h1>
                {
                    !this.state.edit &&
                    <Button onClick={this.toggleEdit}>Edit</Button>
                }

                {
                    this.state.edit &&
                    <StudentForm initialValues={student} onSubmit={this.updateStudent} batch={batch}/>
                }

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
    evaluations: state.evaluations,
    batch: state.batch
})

export default connect (mapStateToProps, {getStudent, getEvaluations, updateStudent})(StudentPage)
