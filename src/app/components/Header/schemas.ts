import { z } from 'zod'

const loginSchema = z.object({
  username: z.string().nonempty('Usuário é obrigatório'),
  password: z
    .string()
    .nonempty('Senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

export { loginSchema }
