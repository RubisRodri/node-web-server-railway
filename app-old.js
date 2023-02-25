

const http = require('http');

http.createServer((req, res) =>{
    
// header para descargar archivos
   // res.writeHead( 200, { 'Content-Type':'application/json'} )
//    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
//     res.writeHead( 200, { 'Content-Type':'application/csv'} );


    res.write( 'Hola mundo' );
    // res.write( '1, Rubis\n' );
    // res.write( '2, Denier\n' );
    // res.write( '3, Maria\n' );

    res.end();

})
.listen( 8080 )


console.log('escuchando el puerto', 8080)