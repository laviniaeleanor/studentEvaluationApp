import React, { PureComponent, Component } from 'react'
import { connect } from 'react-redux'

import EvaluationForm from './EvaluationForm'
import { colors } from '../../constants'

import { getEvaluationColor, getEvaluation } from '../../logic/logic'

import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableCell';
import TableHead from 'material-ui/Table/TableHead';
import TableRow from 'material-ui/Table/TableRow';

export default class EvaluationTable extends PureComponent {

    renderRow(evaluation) {
        return(
            <TableRow key={evaluation.id}>
              <TableCell>
                <div className="evaluation"
                  style={{backgroundColor: getEvaluationColor(evaluation.evaluation, colors)}}><p>{getEvaluation(evaluation.evaluation)}</p></div>
              </TableCell>
              <TableCell style={{fontSize: 16, padding: 20}}>
                {evaluation.remarks || "-"}
              </TableCell>
              <TableCell style={{fontSize: 16, padding: 20}}>{evaluation.date}</TableCell>
              <TableCell style={{fontSize: 16, padding: 20}}><a>Edit</a></TableCell>
            </TableRow>
        )
    }


    render() {
        console.log(evaluations)
        const { evaluations } = this.props

        return(
        <Table>
            <TableHead>
              <TableRow >
                <TableCell style={{fontSize: 16}}>Evaluation</TableCell>
                <TableCell style={{fontSize: 16}}>Remarks</TableCell>
                <TableCell style={{fontSize: 16}}>Date</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>      

          { evaluations.reverse().map(evaluation =>
            this.renderRow(evaluation))}
            </TableBody>
        </Table>
        )
    }
}