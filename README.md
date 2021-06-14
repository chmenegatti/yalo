<h2><center> Repositório Test Yalo </center></h2>

<h3>Endpoints</h3>

<h4>Retorna os usuários do Git</h4>

<pre>api/users?since=number</pre> - onde number é a qunantidade de usuários por páginas (máximo: 30)

<h4>Retorna os detalhes de um usuário do Git</h4>

<pre>api/users/:username/details</pre> - onde username é o usuário do Git

<h4>Retorna os reositórios de um usuário do Git</h4>

<pre>api/users/:username/repos</pre> - onde username é o usuário do Git

<h3>Como instalar</h3>

- 1º Clone o repositório: <pre>git clone https://github.com/chmenegatti/yalo.git</pre>
- 2º Acesse a pasta yalo: <pre> cd yalo</pre>
- 3º Execute a instalação das dependencias: <pre>yarn ou npm i</pre>
- 4º Suba o server com o comando <pre>yarn dev ou npm run dev</pre>
- Use o insomnia ou postman para acessar as rotas.

