# Consultoria Fitness Online com Rubem Puttini

Este repositório contém o código fonte do meu site profissional, que foi criado para divulgar minha carreira como Personal Trainer. O site foi desenvolvido com as seguintes tecnologias: JavaScript, React, Tailwind CSS, Vite e HTML.

## Descrição

O objetivo deste projeto é apresentar de forma clara e objetiva os benefícios da minha Consultoria Fitness Online que meus clientes podem obter ao treinar comigo. A experiência de um futuro aluno no meu site é muito importante, o que fez com que eu colocasse diversas funcionalidades como vantagens de fazer parte, passo a passo para começar, depoimentos de alunos satisfeitos e muito mais.

## Tecnologias Utilizadas

- JavaScript
- React
- Tailwind CSS
- Vite
- HTML
- Vercel (hospedagem e função serverless de geolocalização)

## Como acessar

O site está disponível publicamente em https://www.rubemputtini.com.br. Basta acessar o link no seu navegador para visualizar o conteúdo do site.

Caso encontre algum problema ao acessar o site, verifique sua conexão com a internet e tente novamente. Se o problema persistir, entre em contato comigo para que eu possa ajudar.

Além disso, é importante ressaltar que o conteúdo do site é de propriedade intelectual do autor, portanto, não é permitida a reprodução ou distribuição do conteúdo sem a autorização prévia do mesmo.

## Como executar

Requisito: Node.js 26.x (mesma versão usada no build da Vercel).

1. Faça um clone deste repositório: `git clone https://github.com/rubemputtini/consultoria-fitness.git`
2. Entre na pasta do projeto: `cd consultoria-fitness`
3. Instale as dependências: `npm install`
4. Execute o projeto: `npm run dev`
5. Abra seu navegador e acesse `http://localhost:5173`

O preço exibido depende do país do visitante, detectado pela rota `/api/geo` (`api/geo.js`), que só roda na Vercel. No `npm run dev` essa rota não existe, então o site mostra o preço em reais.

## Preços e deploy

- Os preços e os links de checkout ficam em `src/hooks/useCurrency.js`.
- O deploy é automático: cada push na branch `master` publica o site na Vercel.

## Autor

Rubem Puttini
