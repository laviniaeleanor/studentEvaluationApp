import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import UserController from './users/controller'
import LoginController from './logins/controller'
import BatchController from './batches/controller';
import StudentController from './students/controller';


const port = process.env.PORT || 4001

const app = createKoaServer({
  cors: true,
  controllers: [
    UserController,
    LoginController,
    BatchController,
    StudentController
    ]
})

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
  })
  .catch(err => console.error(err))
