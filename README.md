# Cálculo do ângulo entre os ponteiros do relógio
Aplicação desenvolvida utilizando NodeJS e PostgreSQL que retorna o ângulo formado entre os valores fornecidos para os ponteiros de horas e minutos.

## Preparando o ambiente
Para o projeto executar sem problemas, devem haver as seguintes instalações na máquina que irá executá-lo:

- NodeJS (foi utilizada a versão 18.13.0);
- Yarn ou NPM (Yarn utilizado);
- Docker;
- Insomnia;
- Editor de sua preferência (utilizado VSCode);

## Como rodar o projeto
Clone o repositório utilizando Git:

```
git clone https://github.com/vinicius-gandini/clock-angle
```

Instale as dependências com o gerenciador de pacotes. Exemplo:

```
yarn
```

Para iniciar o projeto, basta executar o script do docker-compose. Dessa forma, um ambiente será configurado dentro do Docker e executará as instâncias do projeto e do MongoDB:

```
sudo docker-compose up --build -d
```

***Após a build, as próximas execuções não precisarão da flag --build***

Para criar a tabela no banco de dados PostgreSQL, deverãos er executadas as migrations utilizando o **Knex**. Segue abaixo o código:

```
yarn knex migration:latest
```

Pronto! Com isso, a aplicação irá rodar na porta 3000 e o PostgreSQL será executado na porta padrão 5432.

Para executar os Testes com Jest, basta executar o comando abaixo:

```
yarn test
```

<br>

# API Reference
Para realizar as requisições, basta utilizar o caminho **http://localhost:3000/v1/rest/clock/:hour/:minute** onde **:hour** se refere ao ponteiro da hora desejada e **:minute** ao ponteiro dos minutos desejados.

Exemplos: <br>
http://localhost:3000/v1/rest/clock/6/15
<br><br>

Retorno:
```JSON
{
  "angle": 90
}
```
<br>

http://localhost:3000/v1/rest/clock/7
<br><br>

Retorno:
```JSON
{
  "angle": 150
}
```

<br>

>O ponteiro das horas deve sempre ser informado, porém o ponteiro dos muinutos é opcional. Se a requisição for feita sem informar a quantidade de minutos, estes serão definidos como zero.
