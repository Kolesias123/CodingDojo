// Mapa de números romanos.
var Mapa = {
	'M': 	1000,
	'CM': 	900,
	'D': 	500,
	'CD': 	400,
	'C': 	100,
	'XC': 	90,
	'L': 	50,
	'XL': 	40,
	'X': 	10,
	'IX': 	9,
	'V': 	5,
	'IV': 	4,
	'I': 	1,
};

// Agregamos la función "repeat" a las cadenas.
// Permitira repetir una cadena X veces.
String.prototype.repeat = function(i)
{
	return new Array(i + 1).join(this);
}

/**
 * Transforma el numero entero a numero romano.
 */
function ARomano(iNum)
{
	// Obtenemos el entero que queremos transformar.
	// Del <input> de index.html
	if ( iNum == undefined )
		iNum = parseInt(document.getElementById('valor').value);

	// ¡Es necesario un numero!
	if ( iNum <= 0 )
		return alert('Escribe un numero valido mayor a 0.');

	var pResult 	= ''; 		// Resultado final (Aqui iran las letras romanas)
	var pBuffer 	= []; 		// Aqui pondremos las letras en un array que podremos manejar.

	for ( var i in Mapa )
	{
		// Mientras el número a convertir esté en nuestro mapa.
		while ( iNum >= Mapa[i] )
		{
			// Al parecer iniciaremos el buffer de esta letra por primera vez.
			// Ejemplo: pBuffer['M'] = 3;
			if ( pBuffer[i] == undefined )
				pBuffer[i] = 0;

			// Agregamos la letra al buffer y restamos la cantidad.
			iNum 		-= Mapa[i];
			pBuffer[i] 	+= 1;
		}
	}

	// Ahora verificamos el Buffer
	for ( var l in pBuffer )
	{
		// Cantidad de veces que se repite esta letra.
		var iCantidad = pBuffer[l];

		// La letra es M (Mil) y se repite mayor a 4 veces.
		// +4,000 Especial: Convertimos solo la cantidad de veces (4,5,6,etc) e ignoramos los miles.
		if ( l == 'M' && iCantidad >= 4 )
		{
			pResult += ARomano(iCantidad);

			// Agregamos un estilo al número romano si es mayor +4,000
			// para representar que el número está siendo multiplicado
			// por 1,000
			pResult = '<span style="text-decoration:overline;">' + pResult + '</span>';
		}
		// De otra forma solo repetimos las letras.
		else
		{
			pResult += l.repeat(iCantidad);
		}
	}

	// Imprimimos el resultado final.
	document.getElementById('en_romano').innerHTML = pResult;
	return pResult;
}