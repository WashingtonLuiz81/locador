import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import type { JWT } from 'next-auth/jwt'
import type { Session, NextAuthOptions } from 'next-auth'
import type { NextApiRequest } from 'next'
import { User } from '@/core/model'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('Authorizing user:', credentials)
        const user = await prisma.user.findUnique({
          where: { username: credentials?.username },
        })

        if (user && credentials?.password) {
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password!,
          )

          if (isValid) {
            console.log('User authenticated:', user)
            return user as User
          }
        }
        console.log('Authentication failed')
        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt', // Use 'jwt' ou 'database', conforme a sua configuração
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
}

export default NextAuth(authOptions)
