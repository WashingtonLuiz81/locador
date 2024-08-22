import { User as CustomUser } from '@/core/model/User'

declare module 'next-auth' {
  interface Session {
    user: CustomUser
  }

  interface User extends CustomUser {}
}
