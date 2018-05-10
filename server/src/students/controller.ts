import { Post, Param, HttpCode, Get, Body, JsonController, Patch, NotFoundError, Delete} from 'routing-controllers'
import Student from './entity';

@JsonController()
export default class StudentController {
    //creates new student
    @Post('/students')
    @HttpCode(201)
    async createStudent(
        @Body() student: Student
    ) {
        const entity = await student.save()

        return entity
    }

    //requests all students by class
    @Get('/classstudents/:id([0-9]+)')
    @HttpCode(201)
    getClassStudents(
        @Param('id') batchRequestId: number
    ) {
        console.log('youve made it here')
        let classStudents = Student.find( {batch: batchRequestId} ) 

        return classStudents 
    }

    @Get('/students/:id([0-9]+)')
    @HttpCode(201)
    getStudent(
        @Param('id') studentId: number
    ) {
        return Student.findOne(studentId)
    }

    //modify student by id
    @Patch('/students/:id([0-9]+)')
    async updateStudent(
        @Param('id') studentId: number,
        @Body() update 
    ) {
        const student = await Student.findOne(studentId)
        console.log(update)

        if (!student) throw new NotFoundError(`Student not found`)

        const updatedStudent = Student.merge(student, update)
        
        const entity = await updatedStudent.save()
        console.log(entity)
        return entity
    }

    //delete student by id
    @Delete('/students/:id')
    async deleteStudent(
        @Param('id') id: number
    ) {
        const student = await Student.findOne(id)

        if (!student) throw new NotFoundError(`Student not found`)

        Student.remove(student)
        return student
    }
}