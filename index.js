const http = require ('http')
const hostname  = '127.0.0.1'
const port  = 8000

const serveur =
    http. createServer ( (requete, reponse) =>{

        response.statusCode = 200
        response. setHeader ('Content-Type', 'text/plain')
        response. end ('Coucou les champions SLAM2')
})

server. Listen(port, hostname, () => {
    console. log('Le serveur tourne sur mon poste: http: //${hostname}:$(port}`)
        })