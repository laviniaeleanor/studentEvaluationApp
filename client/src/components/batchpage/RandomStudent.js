import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import {getRandomStudent} from '../../logic/logic'

export default class BatchInfo extends PureComponent {

    render(){
        const {students} = this.props
        console.log(students)

        return(
            <Paper className="outer-paper">
            <Button className ="getRandomStudent"
            onClick = {() => getRandomStudent(students)}
            >Ask Random Question</Button>
            </Paper>
        )
    }
}
