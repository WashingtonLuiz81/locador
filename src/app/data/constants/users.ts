import { User } from '@/core/model/User'

const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    username: 'johndoe',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    password: 'password123',
    username: 'janedoe',
    role: 'user',
  },
]

export default users
