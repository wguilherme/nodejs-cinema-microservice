## MongoDB docker commands

// catalog service
- docker run -d -p 27020:27017 --name mongodb-catalog-27020  mongo:4.0.4  

// movies service
- docker run -d -p 27017:27017 --name mongodb-catalog-27020 mongo

// mongo db command line
show dbs
use microservice-catalog
show collections


```
// populate movies
// use movies
db.movies.insert([{
   titulo: "Os Vingadores: Guerra Infinita",
   sinopse: "Os heróis mais poderosos da Marvel enfrentando o Thanos",
   duracao: 120,
   dataLancamento: ISODate("2018-05-01T00:00:00Z"),
   imagem: "http://www.luiztools.com.br/vingadores-gi.jpg",
   categorias: ["Aventura", "Ação"]
},
{
   titulo: "Os Vingadores: Era de Ultron",
   sinopse: "Os heróis mais poderosos da Marvel enfrentando o Ultron",
   duracao: 110,
   dataLancamento: ISODate("2016-05-01T00:00:00Z"),
   imagem: "http://www.luiztools.com.br/vingadores-eu.jpg",
   categorias: ["Aventura", "Ação"]
},
{
   titulo: "Os Vingadores",
   sinopse: "Os heróis mais poderosos da Marvel enfrentando o Loki",
   duracao: 100,
   dataLancamento: ISODate("2014-05-01T00:00:00Z"),
   imagem: "http://www.luiztools.com.br/vingadores.jpg",
   categorias: ["Aventura", "Ação"]
}])
```




```
// populate cinemaCatalog
// use cinema-catalog-service
db.cinemaCatalog.insert([
{
    cidade: "Gravataí",
    uf: "RS",
    cinemas: []
},
{
    cidade: "Porto Alegre",
    uf: "RS",
    pais: "BR",
    cinemas: [
       {
          _id: ObjectId(),
          nome: "Cinemark Bourbon Ipiranga",
          salas: [
             {
                nome: 1,
                sessoes: [
                   {
                      data: ISODate("2018-06-01T09:00:00Z"),
                      idFilme: ObjectId("5aefc5029ce83b1eb6b89e57"),
                      filme: "Vingadores: Guerra Infinita",
                      valor: 25.00,
                      assentos: [
                         { numero: 1, disponivel: true },
                         { numero: 2, disponivel: false },
                      ]
                   },
                   {
                      data: ISODate("2018-06-01T11:00:00Z"),
                      idFilme: ObjectId("5aefc5029ce83b1eb6b89e57"),
                      filme: "Vingadores: Guerra Infinita",
                      valor: 25.00,
                      assentos: [
                         { numero: 1, disponivel: true },
                         { numero: 2, disponivel: true },
                      ]
                   },
                   {
                    data: ISODate("2018-06-01T13:00:00Z"),
                    idFilme: ObjectId("5aefc5029ce83b1eb6b89e58"),
                    filme: "Vingadores: Era de Ultron",
                    valor: 20.00,
                    assentos: [
                       { numero: 1, disponivel: true },
                       { numero: 2, disponivel: false },
                       { numero: 2, disponivel: true },
                    ]
                 }
                ]
             },
             {
                nome: 2,
                sessoes: [
                   {
                      data: ISODate("2018-06-01T09:00:00Z"),
                      idFilme: ObjectId("5aefc5029ce83b1eb6b89e58"),
                      filme: "Vingadores: Era de Ultron",
                      valor: 25.00,
                      assentos: [
                         { numero: 1, disponivel: true },
                         { numero: 2, disponivel: false },
                      ]
                   },
                   {
                      data: ISODate("2018-06-01T11:00:00Z"),
                      idFilme: ObjectId("5aefc5029ce83b1eb6b89e58"),
                      filme: "Vingadores: Era de Ultron",
                      valor: 25.00,
                      assentos: [
                         { numero: 1, disponivel: true },
                         { numero: 2, disponivel: true },
                      ]
                   },
                   {
                    data: ISODate("2018-06-01T13:00:00Z"),
                    idFilme: ObjectId("5aefc5029ce83b1eb6b89e58"),
                    filme: "Vingadores: Era de Ultron",
                    valor: 20.00,
                    assentos: [
                       { numero: 1, disponivel: true },
                       { numero: 2, disponivel: false },
                       { numero: 2, disponivel: true },
                    ]
                 }
                ]
             }
          ]
       },
       {
        _id: ObjectId(),
        nome: "GNC Lindóia",
        salas: [
           {
              nome: 100,
              sessoes: [
                 {
                    data: ISODate("2018-06-01T09:00:00Z"),
                    idFilme: ObjectId("5aefc5029ce83b1eb6b89e59"),
                    filme: "Os Vingadores",
                    valor: 25.00,
                    assentos: [
                       { numero: 1, disponivel: true },
                       { numero: 2, disponivel: false },
                    ]
                 },
                 {
                    data: ISODate("2018-06-01T11:00:00Z"),
                    idFilme: ObjectId("5aefc5029ce83b1eb6b89e59"),
                    filme: "Os Vingadores",
                    valor: 25.00,
                    assentos: [
                       { numero: 1, disponivel: true },
                       { numero: 2, disponivel: true },
                    ]
                 },
                 {
                  data: ISODate("2018-06-01T13:00:00Z"),
                  idFilme: ObjectId("5aefc5029ce83b1eb6b89e58"),
                  filme: "Vingadores: Era de Ultron",
                  valor: 20.00,
                  assentos: [
                     { numero: 1, disponivel: true },
                     { numero: 2, disponivel: false },
                     { numero: 2, disponivel: true },
                  ]
               }
              ]
           }
        ]
     }
    ]
}])
```
