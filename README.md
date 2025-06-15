# Desafio técnico - Easysecrets

## Descrição

A aplicação funciona de forma simples, você tem um dashboard onde pode ter varios gráficos. Incialmente não há
nehum gráfico, para adicionar um você precisa clicar no botão "Adcicionar novo gráfico", um modal com um formulário sera aberto e nele
você pode dar um nome para o gráfico, como por exemplo "Vendas dos ultimos 6 mesês", depois é necessário um arquivo '.json' com os dados das vendas para criar o gráfico,
o arquivo '.json' deve ter um formato especifico que vou deixar abaixo da seção "Estrutura de Pastas" aqui no readme, o arquivo "vendas.json" fornecido
no desafio já está nesse formato.

## Tecnologias usadas

1. React (Biblioteca javaScript para desenvolvimento front-end).
2. TypeScript (Linguagem de programação).
3. Recharts (Biblioteca de gráficos).
4. Redux (Gerenciamento de stado).
5. React-hook-form (Criação de formularios).
6. lucide-react (Biblioteca de icones).
7. React-router (Gerenciamento de rotas no react).
8. uuid (Gerar UUID).

## Estrutura de Pastas

- `src/` (Código fonte).
- `src/pages` (Contém as páginas da aplicação).
- `src/componentes` (Componentes globais da aplicação).
- `src/assets` (Contém imagens e icones do projeto).
- `src/routes` (Contém as rotas da aplicação).
- `src/store` (Contém os componentes do redux, como o 'index.ts' que é responsavel por definir a store do redux).
- `src/store/slices` (Contém as fatias/stados do redux).
- `_componentes` (Patas como essa contém componentes exclusivos).

## Formato do JSON

```typescript
interface data {
  produto: string;
  vendas: { mes: string, quantidade: number }[]
}[]
```

## Instruções para rodar o projeto

1. Clone o repository.
2. Entre na pasta raiz e rode o comando `npm install`.
3. Ainda na pasta raiz rode o comando `npm run dev`.
4. Entre no navegador e pesquise por "http://localhost:5173"



