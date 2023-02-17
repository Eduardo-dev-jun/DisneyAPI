<h1>Instalando e iniciando API</h1>

Para instalar a API, basta baixar e extrair esse repositório na sua máquina e abrir a pasta com um prompt de comando da sua preferência.
Feito isso, é necessário que você possua o NodeJs instalado na sua máquina para então rodarmos o seguinte comando de instalação das dependências da API:

```
npm intall
```
<br>
Logo após isso, rodaremos o comando:

```
npm start
```

Para darmos inicio a API


<h2>Funcionalidades da API</h2>

A API conta com 2 endpoint, sendo eles

1.	http:\\localhost:8000/filters
2.	http:\\localhost:8000/movies
<br>

O primeiro endpoint, ao ser solicitado, irá retornar um json com os anos dos filmes e os gêneros. Na resposta, o ano e o gênero será um array com informações únicas em cada posição.

Ex: 
```
{
  years: [2000, 1995, 1992, 1988, 1982]
  genre: [Musical, Adventure, Comedy]
}

```

<br><br>

No segundo endpoint deve retornar todos os filmes conforme o filtro enviado no corpo da requisição.
Exemplo de uma requisição: 
```
http:\\localhost:8000/movies?years=2000,1995&genre=Comedy
```
Caso não seja passado nenhum filtro, será retornado todos os filmes da lista.

<br><br>

<h2>Video demonstrativo</h2>

 
 

https://user-images.githubusercontent.com/74336887/219740608-b178982b-258d-4db5-802b-e63dc4db3229.mp4


 
 
 
 
 
 
 
 
 
 
 
 
 
