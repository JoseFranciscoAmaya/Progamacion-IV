app.js
document.addEventListener("DOMContentLoaded",e=>{
    document.addEventListener("submit",event=>{
        event.preventDefault();


        let de = document.querySelector("#cboDe").value,
            a = document.querySelector("#cboA").value,
            cantidad = document.querySelector("#txtCantidadConversores").value,
            $res = document.querySelector("#lblRespuesta");
        let monedas={
            'dolar':1,
            'Colones(SV)':8.75,
            'Yenes':111.27,
            'Rupia(SV)':69.75,
            'Lempiras':24.86,
            'Peso (MX)':19.36,
            'Bitcoin':0.00026,
                       
        };
        $res.innerHTML = `Respuesta: ${ monedas[a] / monedas[de] * cantidad }`;
    });
});

