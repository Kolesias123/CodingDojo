// Enteros y sus letras en Romano.
var Arreglo = {
	'M': 1000,
	'CM': 900,
	'D': 500,
	'CD': 400,
	'C': 100,
	'XC': 90,
	'L': 50,
	'XL': 40,
	'X': 10,
	'IX': 9,
	'V': 5,
	'IV': 4,
	'I': 1,
};

/**
 * Transforma el numero entero a numero romano.
 */
function ARomano()
{
	// Obtenemos el entero que queremos transformar.
	var pNum = parseInt(document.getElementById('valor').value);

	// ¡Es necesario un numero!
	if ( pNum <= 0 )
		return alert('Escribe un numero valido mayor a 0.');

	// Resultado final (Aqui iran las letras romanas)
	var pResult = '';

	for ( var i in Arreglo )
	{
		var pCantidad = Arreglo[i];

		// Division entre la cantidad a convertir y el numero que podemos convertir a romano.
		var pTmp = pNum / pCantidad;

		// La division ha dado mayor o igual a 1, perfecto.
		if ( pTmp >= 1 )
		{
			// Ponemos la cantidad de letras adecuada a la division.
			for ( f = 1; f <= pTmp; ++f )
			{
				pNum 	-= pCantidad;
				pResult += i;
			}
		}
	}

	document.getElementById('en_romano').innerHTML = pResult;
}