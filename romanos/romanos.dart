import 'dart:html';
import 'dart:collection';

class Romano
{
	// Enteros y sus letras en Romano.
	static HashMap Arreglo = {
		1000: 'M',
		900: 'CM',
		500: 'D',
		400: 'CD',
		100: 'C',
		90: 'XC',
		50: 'L',
		40: 'XL',
		10: 'X',
		9: 'IX',
		5: 'V',
		4: 'IV',
		1: 'I'
	};
	
	static int pNum;
	static String pResult;
	
	/**
	 * Comienza la conversión de los numeros.
	 */
	static void Conversion(MouseEvent e)
	{
		InputElement pValor = querySelector('#valor'); 	// Input con ID valor
		pNum 				= int.parse(pValor.value); 	// Valor del input.
		pResult 			= ''; 						// Resultado final (Aqui iran las letras romanas)
		
		// ¡Es necesario un numero!	
		if ( pNum <= 0 )
			return window.alert('Escribe un numero valido mayor a 0.');
			
		// Revisamos cada valor del arreglo en la función "Procesar"
		Arreglo.forEach(Romano.Procesar);

		// Establecemos el resultado final.
		querySelector('#en_romano').innerHtml = pResult;
	}
	
	/**
	 * Procesa un valor del Arreglo.
	 */
	static void Procesar(int pCantidad, String pRomano)
	{
		// Division entre la cantidad a convertir y el numero que podemos convertir a romano.
		double pTmp = (pNum / pCantidad).toDouble();
			
		// La division ha dado mayor o igual a 1, perfecto.
		if ( pTmp >= 1.0 )
		{
			// Ponemos la cantidad de letras adecuada a la division.
			for ( int f = 1; f <= pTmp; ++f )
			{
				pNum 		-= pCantidad;
				pResult 	+= pRomano;
			}
		}
	}
}

/**
 * Constructor
 */
void main()
{
	// Cuando le den clic al boton ejecutar la funcion "Conversion" en "Romano"
	querySelector('#convertir').onClick.listen(Romano.Conversion);
}