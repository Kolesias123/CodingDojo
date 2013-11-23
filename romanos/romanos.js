function ARomano()
{
	var pNum = document.getElementById('valor').value;

	if ( pNum <= 0 )
		return alert('Escribe un numero valido.');

	// Enteros y sus letras en Romano.
	var Arreglo = {
		1: 'I',
		4: 'IV',
		5: 'V',
		9: 'IX',
		10: 'X',
		50: 'L',
		40: 'XL',
		90: 'XC',
		100: 'C',
		400: 'CD',
		500: 'D',
		900: 'CM',
		1000: 'M'
	};

	// Resultado final (Aqui iran las letras romanas)
	var pResult = '';

	for ( i = 2000; i > 0; --i )
	{
		// Este numero no es valido para convertir.
		if ( Arreglo[i] == undefined )
			continue;

		// Division entre la cantidad a convertir y el numero que podemos convertir a romano.
		var pTmp = pNum / i;

		// La division ha dado mayor a 1, perfecto.
		if ( pTmp >= 1 )
		{
			// Ponemos la cantidad de letras adecuada a la division.
			for ( f = 1; f <= pTmp; ++f )
			{
				pNum 	-= i;
				pResult += Arreglo[i];
			}
		}
	}

	document.getElementById('en_romano').innerHTML = pResult;
}