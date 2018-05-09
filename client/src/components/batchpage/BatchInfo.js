import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'
import {calculatePercentages} from '../../logic/logic'

export default class BatchInfo extends PureComponent {

    render(){
        const {students} = this.props
        const percentages = calculatePercentages(students)
        console.log(percentages)
        return(
            <Paper className="outer-paper">
            <h2>Batch evaluation overview</h2>
            {percentages.green !== 0 && <p>Green: {percentages.green}%</p>}
            {percentages.yellow !== 0 && <p>Yellow: {percentages.yellow}%</p>}
            {percentages.red !== 0 && <p>Red: {percentages.red}%</p>}
            {percentages.grey !== 0 && <p>Not yet evaluated: {percentages.grey}%</p>}
            </Paper>
        )
    }
}
