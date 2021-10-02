# Teste Automatizado com Cypress e Cucumber


## Preparando o Ambiente ⚙️

 1. Instalar o [Node.js](https://nodejs.org/en/) 
 2. Instalar o [VS Code](https://code.visualstudio.com/) 
 3. Instalar o [Cypress](https://www.cypress.io/)

## Configurando o Cypress
Na pasta principal do  projeto, abra o terminal e execute os seguintes comandos:
``` bash
npm init -y
npm install cypress --save-dev
``` 
Para executar o Cypress e criar todas as pastas necessárias execute o comando:
```bash 
"./node_modules/.bin/cypress open"
```
Após a primeira execução, podemos editar o arquivo package.json para que o comando de execução seja reduzido. <br>
Exemplo: 
``` json
{
  "scripts": {
      "cypress:open": "cypress open"
}
```
Comando:
```bash 
"npm run cypress:open"
```

## Instalando e Configurando o [Cypress-Cucumber-Preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)

Na pasta principal do  projeto, abra o terminal e execute os seguintes comandos:
```bash
npm install --save-dev cypress-cucumber-preprocessor
```
Adicione ao arquivo cypress/plugins/index.js o seguinte script:
``` JS
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

Adicione ao arquivo cypress.json o seguinte script:
``` json
{
  "testFiles": "**/*.feature"
}
```


Adicione ao arquivo package.json o seguinte script:
``` json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```
## Estrutura do Projeto 🛠️

### Pastas Utilizadas 

1. **Integration:** Nesta pasta ficam os arquivos com os cenários de teste escritos no formato **BDD** <br> 
e uma subpasta com o nome do arquivo de cenário que irá conter os **steps** em formato JS
2. **Plugins:** Aqui fica o arquivo index.js com parte da configuração do Cucumber 


## URL utilizada 💻

É necessário configurar o arquivo **cypress.json**, para inserir a URL que será utilizada nos testes.
``` json
{
    "baseUrl": "https://www.jotform.com/form/212455605883662"
}
```

## Teste 

1. Criar um arquivo com o cenário de teste escrito em BDD. Ele deve ficar dentro de **cypress/integration** e ter a extensão **.feature**. <br>
Neste arquivo foi inserida a informação **#language: pt** na primeira linha. Com isso é possivel escrever o cenário em portugues, deixando <br> 
a leitura mais amigável. 
2. Mapear todos os elementos que precisaremos para nosso texto, como campos de preenchimento, botões, caixas de seleção, etc. 
3. Dentro da pasta **cypress/integration/** criaremos uma pasta com o mesmo nome do arquivo de extensão feature.
4. Dentro dessa nova pasta criaremos um arquivo acrescido da palavra "Steps" ou apenas steps.js. 
5. Neste arquivo criamos os steps e dentro de cada step executaremos uma ou mais funções

## Referência Utilizada

MEDIUM. **Testes automatizados com Cypress e Cucumber**. Disponível em: https://medium.com/cwi-software/testes-automatizados-com-cypress-e-cucumber-d78b211da766.
