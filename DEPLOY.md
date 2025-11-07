# Guia de Deploy no Vercel

## Pré-requisitos

1. Conta no GitHub (gratuita)
2. Conta no Vercel (gratuita)

## Passo 1: Preparar o Repositório Git

```bash
cd /caminho/do/seu/projeto
git init
git add .
git commit -m "Initial commit - Portfolio"
```

## Passo 2: Enviar para GitHub

1. Acesse https://github.com/new
2. Crie um novo repositório chamado `meu-portifolio`
3. Siga as instruções para fazer push do seu código local

```bash
git remote add origin https://github.com/SEU_USUARIO/meu-portifolio.git
git branch -M main
git push -u origin main
```

## Passo 3: Deploy no Vercel

1. Acesse https://vercel.com
2. Clique em "New Project"
3. Selecione "Import Git Repository"
4. Escolha o repositório `meu-portifolio`
5. Clique em "Deploy"

O Vercel detectará automaticamente que é um projeto Vite e fará o build corretamente!

## Pronto!

Seu portfólio estará disponível em um URL como: `https://meu-portifolio.vercel.app`

Você pode configurar um domínio personalizado nas configurações do Vercel.

## Atualizações Futuras

Para atualizar o site, basta fazer push das mudanças para o GitHub:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

O Vercel fará o redeploy automaticamente!
