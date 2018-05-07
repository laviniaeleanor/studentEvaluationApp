import { JsonController, Get, Param, Body, Post, NotFoundError } from 'routing-controllers'
import User from './entity'

@JsonController()
export default class UserController {
  // requests all users
  @Get('/users')
  async allUsers(){
    const users = await User.find()
    if (!users) throw new NotFoundError('Users table doesn\'t exist')
    return {users}
  }
  // requests one user
  @Get('/users/:id')
  async user(
    @Param('id') id: number
  ){
    const user = await User.findOne(id)
    return { user }
  }

  // creates a user
  @Post('/users')
  async createUser(
    @Body() user: User
  ) {
    const {password, ...rest} = user
    const entity = User.create(rest)
    await entity.setPassword(password)
    return entity.save()
  }

} 