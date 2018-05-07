import { Post, Param, HttpCode, Get, Body, JsonController} from 'routing-controllers'
import Batch  from './entity'

@JsonController()
export default class BatchController {
    //creates new class
    @Post('/batches')
    @HttpCode(201)
    async createBatch(
        @Body() batch: Batch
    ) {
        const entity = await batch.save()

        return { entity }
    }

    //requests all classes
    @Get('/batches')
    @HttpCode(201)
    getBatches(){
        return Batch.find()
    }

    //requests one class
    @Get('/batches/:id([0-9]+)')
    async getBatch(
        @Param('id') id: number,
    ){
        return await Batch.findOne(id)
    }
}

// @Get('/users/:id')
//   async user(
//     @Param('id') id: number
//   ){
//     const user = await User.findOne(id)
//     return { user }
//   }