function Rut( Valor )
{
	var tmpstr = "";
	var intlargo = Valor
	if (intlargo.length> 0)
	{
		crut = Valor
		largo = crut.length;
		if ( largo <2 )
		{
			alert("El rut ingresado no es válido")
			return false;
		}
		for ( i=0; i <crut.length ; i++ )
			if ( crut.charAt(i) != ' ' && crut.charAt(i) != '.' && crut.charAt(i) != '-' )
			{
				tmpstr = tmpstr + crut.charAt(i);
			}
		rut = tmpstr;
		crut=tmpstr;
		largo = crut.length;

		if ( largo> 2 )
			rut = crut.substring(0, largo - 1);
		else
			rut = crut.charAt(0);

		dv = crut.charAt(largo-1);

		if ( rut == null || dv == null )
			return 0;

		var dvr = '0';
		suma = 0;
		mul  = 2;

		for (i= rut.length-1 ; i>= 0; i--)
		{
			suma = suma + rut.charAt(i) * mul;
			if (mul == 7)
				mul = 2;
			else
				mul++;
		}

		res = suma % 11;
		if (res==1)
			dvr = 'k';
		else if (res==0)
			dvr = '0';
		else
		{
			dvi = 11-res;
			dvr = dvi + "";
		}
		if ( dvr != dv.toLowerCase() )
		{
			alert("El rut ingresado no es válido")
			return false;
		}
		//alert('El Rut Ingresado es Correcto!')
		return true;
	}
}
function validaPatient (rut){
    $.ajax({
        url:'/patient/exist',
        type:'POST',
        data:{rut:rut},
        success:function(response){
            if(response == 1)
                return true;
            else
            return false;
        }
    })
}

function validaTerapist (rut){
    function validaPaciente (rut){
        $.ajax({
            url:'/patient/exist',
            type:'POST',
            data:{rut:rut},
            success:function(response){
                if(response == 1)
                    return true;
                else
                    return false;
            }
        })
    }
}