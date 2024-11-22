# Gerenciador de Dados Descentralizados com Blockchain

Este projeto é uma aplicação web que utiliza a tecnologia blockchain para permitir que os usuários acompanhem e gerenciem o uso de seus dados pessoais por terceiros. A aplicação oferece uma interface gráfica intuitiva para visualizar, em tempo real, quem acessou os dados, quando e com qual finalidade, além de exibir notificações sobre esses eventos.

## Funcionalidades Principais

- **Visualização de Acessos aos Dados**: Exibe o total de acessos, o último acesso registrado, e as entidades que solicitaram acesso.
- **Gráficos de Acessos**: Mostra a quantidade de acessos aos dados por mês em um gráfico interativo.
- **Notificações em Tempo Real**: Os usuários são notificados sempre que seus dados forem acessados por terceiros.
- **Tipos de Dados Acessados**: Detalha quais tipos de dados pessoais (como nome, email, endereço) foram acessados.
- **Conformidade com a LGPD**: Garante que o sistema está em conformidade com as legislações de proteção de dados, como a LGPD (Lei Geral de Proteção de Dados).
- **Tela de Vazamento de Dados**: Permite que os usuários verifiquem se seus dados foram vazados na deep ou dark web, baseada em uma interface semelhante à do Serasa.
- **Tela de Blockchain (Ethereum)**: Exibe os 10 blocos mais recentes e as 10 primeiras transações do último bloco por meio de uma integração com a API da Etherscan.

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework React para criação de interfaces modernas.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e responsiva.
- **[Shadcn/UI](https://shadcn.dev/)**: Biblioteca para construção de componentes modernos e acessíveis.
- **[Ethers.js](https://docs.ethers.org/)**: Biblioteca JavaScript para interagir com a blockchain Ethereum.
- **API Etherscan**: Para obtenção de dados dos blocos e transações da Ethereum.

## Deploy

- Acesse a aplicação em <https://gerenciador-de-dados.vercel.app/>

## Telas

### 1. Dashboard
Visualização centralizada de acessos, notificações em tempo real e gráficos.  
![Dashboard](https://github.com/user-attachments/assets/1d8e671b-5d97-4df5-bf3f-486e91624b9b)

### 2. Tela de Vazamento de Dados
Interface inspirada no modelo do Serasa, permitindo aos usuários verificar se dados pessoais foram vazados na Deep/Dark Web.  
![Leaks](https://github.com/user-attachments/assets/25638f95-cd8d-4eab-820c-a2c9f80eca54)

### 3. Tela de Blockchain (Ethereum)
Consulta e exibição dos blocos mais recentes da rede Ethereum e transações associadas.  
![Blockchain](https://github.com/user-attachments/assets/3b468bbd-6ade-4a07-a8bf-58da000afee0)

## Configuração e Instalação

### Pré-requisitos

- Node.js (v18 ou superior)
- Yarn

### Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/OtavioCanedo/block-privacy
2. Entre na pasta
   ```bash
   cd block-privacy
3. Instale as dependências
   ```bash
   yarn
4. Rode o projeto
   ```bash
   yarn dev
