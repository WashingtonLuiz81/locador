import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('your_password_here', 10) // Substitua pela senha que desejar

  const user = await prisma.user.create({
    data: {
      username: 'testuser', // Defina o nome de usuário que deseja
      password: hashedPassword,
      name: 'Test User',
      email: 'testuser@example.com',
      role: 'user', // Pode ser 'admin' ou o que preferir para testar permissões
    },
  })

  console.log('User created:', user)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
