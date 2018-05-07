import { Post, Param, HttpCode, Get, Body, JsonController, Patch, NotFoundError, Delete} from 'routing-controllers'
import Evaluation from './entity';

@JsonController()
export default class EvaluationController {
    //creates new evaluation
    @Post('/evaluations')
    @HttpCode(201)
    async createEvaluation(
        @Body() evaluation: Evaluation
    ) {
        const entity = await evaluation.save()

        return { entity }
    }

    //requests all evaluations by class
    @Get('/classevaluations/:id([0-9]+)')
    @HttpCode(201)
    getClassEvaluations(
        @Param('id') batchRequestId: number
    ) {
        let classEvaluations = Evaluation.find( {batch: batchRequestId} ) 

        return classEvaluations 
    }

    //requests all evaluations by student
    @Get('/studentevaluations/:id([0-9]+)')
    @HttpCode(201)
    getStudentEvaluations(
        @Param('id') studentId: number
    ) {
        let studentEvaluations = Evaluation.find( {student: studentId} ) 

        return studentEvaluations 
    }

    //modify evaluation by id
    @Patch('/evaluations/:id([0-9]+)')
    async updateEvaluation(
        @Param('id') id: number,
        @Body() update 
    ) {
        const evaluation = await Evaluation.findOne(id)

        if (!evaluation) throw new NotFoundError(`Evaluation not found`)

        const updatedEvaluation = Evaluation.merge(evaluation, update)
        
        const entity = await updatedEvaluation.save()
        return entity
    }

    //delete evaluation by id
    @Delete('/evaluations/:id')
    async deleteEvaluation(
        @Param('id') id: number
    ) {
        const evaluation = await Evaluation.findOne(id)

        if (!evaluation) throw new NotFoundError(`Evaluation not found`)

        Evaluation.remove(evaluation)
        return 'successfully deleted'
    }
}