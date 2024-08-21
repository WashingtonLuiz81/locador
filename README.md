# **Locador** 🎬🍿  
**A sua locadora Online**

## 📚 **Projeto**

**Locador** é uma aplicação de listagem de filmes para alugar. A aplicação utiliza a API pública de filmes para buscar detalhes dos filmes e permite que o usuário veja informações como o título, sinopse, data de lançamento e a opção de marcar como favorito.

## ✨ **Funcionalidades**

- 🗂️ Listagem de filmes disponíveis para alugar.
- 🔍 Busca por filmes no catálogo.
- ❤️ Adicionar ou remover filmes dos favoritos.
- 🛒 Carrinho de compras para alugar filmes.
- 🎬 Exibição de detalhes dos filmes como sinopse, poster e data de lançamento.

## 🚀  **Tecnologias Utilizadas**

- ![Next.js](https://img.shields.io/badge/-Next.js-000?logo=next.js&logoColor=white&style=flat-square)  - Framework React para renderização do lado do servidor.
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square)  - Superset de JavaScript que adiciona tipagem estática.
- ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square) - Framework de CSS utilitário para estilização rápida.
- ![Zod](https://img.shields.io/badge/-Zod-FF6B6B?logo=zod&logoColor=white&style=flat-square) - Biblioteca de validação de esquema.
- ![React Hook Form](https://img.shields.io/badge/-React--Hook--Form-EC5990?logo=reacthookform&logoColor=white&style=flat-square) - Biblioteca para gerenciamento de formulários em React.
- ![Lucide](https://img.shields.io/badge/-Lucide-61DAFB?logo=lucide&logoColor=white&style=flat-square) - Conjunto de ícones para React.

## 🌐 **Deploy**

O projeto está disponível para visualização em: [Locador](https://locador.vercel.app/).

## ⚙️ **Como Rodar o Projeto**
### Pré-requisitos:

- Node.js versão 16+.
- Gerenciador de pacotes Yarn ou NPM.

### Passos para rodar localmente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/usuario/locador.git
2. **Navegue para o diretório do projeto:**

   ```bash
   cd locador
3. **Instale as dependências:**
    #### **Usando Yarn:**
   ```bash
   yarn install
    ```
    #### **Ou usando NPM:**
    ```
   npm install
   ```
4. **Configure as variáveis de ambiente:**
Crie um arquivo .env.local na raiz do projeto e adicione as variáveis necessárias, como a URL da API de filmes:
   ```bash
   NEXT_PUBLIC_URL_API=https://api.themoviedb.org/3
   NEXT_PUBLIC_API_KEY=your_api_key_here
    ```
5. **Rodar o projeto localmente:**
     #### **Usando Yarn:**
   ```bash
   yarn dev
    ```
    #### **Ou usando NPM:**
    ```
   npm run dev
   ```
    O projeto estará disponível em: (http://localhost:3000)
    
## 📌 Melhorias Futuras
- Implementar a funcionalidade de localização da loja mais próxima para retirada de filmes.
- Adicionar sistema de recomendações de filmes.
- Integração com um gateway de pagamento.
- Criar um backend para gerenciar um controle dos filmes alugados pelos usuários e autenticação.

## 🤝  Contribuições
Contribuições são bem-vindas! Para contribuir, siga estas etapas:
1. Faça um fork do projeto.
2. Crie uma branch para sua nova feature (git checkout -b feature/MinhaFeature).
3. Faça o commit das suas alterações (git commit -m 'Adicionei minha nova feature').
4. Faça o push para sua branch (git push origin feature/MinhaFeature).
5. Abra um Pull Request.