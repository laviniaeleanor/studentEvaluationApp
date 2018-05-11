import React, { PureComponent } from 'react'
import { calculatePercentages } from '../../logic/logic'
import { colors } from '../../constants'

export default class BatchInfo extends PureComponent {

  render(){
    const {students} = this.props
    const percentages = calculatePercentages(students)

    return(
      <div className="BatchInfo">

        <div className = "Percentage" style={{backgroundColor : colors.green}}>Good: {percentages.green.toFixed(2)}%</div>
        <div className = "Percentage" style={{backgroundColor : colors.yellow}}>Medium: {percentages.yellow.toFixed(2)}%</div>
        <div className = "Percentage" style={{backgroundColor : colors.red}}>Negative: {percentages.red.toFixed(2)}%</div>
        <div className = "Percentage" style={{backgroundColor : colors.grey}}>Not yet evaluated: {percentages.grey.toFixed(2)}%</div>

      </div>
    )
  }
}
