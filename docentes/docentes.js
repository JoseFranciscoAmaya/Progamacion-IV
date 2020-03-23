"docentes.html"

<form method="post" id="frmDocentes">
    <div class="card text-white bg-dark mb-3" style="max-width: 24rem;">
        <div class="card-header">
            MANTENIMIENTO DE DOCENTES

            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="card-body">
            <div class="row row-cols-1 p-2">
                <div class="row-col">
                    <div class="col">
                        CODIGO:
                    </div>
                    <div class="col">
                        <input type="text" required id="txtCodigoDocente" placeholder="XXXX000000" class="form-control">
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 p-2">
                <div class="row-col">
                    <div class="col">
                        NOMBRE:
                    </div>
                    <div class="col">
                        <input type="text" required id="txtNombreDocente" placeholder="AAA AAAA" class="form-control">
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 p-2">
                <div class="row-col">
                    <div class="col">
                        DIRECCION:
                    </div>
                    <div class="col">
                        <input type="text" required id="txtDireccionDocente" placeholder="XXXX000000" class="form-control">
                    </div>
                </div>
            </div>
            <div class="row row-cols-1">
                <div class="row-col">
                    <div class="col">
                        TELEFONO:
                    </div>
                    <div class="col">
                        <input type="text" required id="txtTelefonoDocente" placeholder="0000-0000" class="form-control">
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 p-2">
                <div class="row-col text-center">
                    <div class="col">
                        <input id="btnGuardarDocente" type="submit" class="btn btn-outline-primary text-white" value="Guardar">
                        <input type="reset" class="btn btn-outline-warning text-white" value="Limpiar">
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 p-2">
                <div class="row-col text-center">
                    <div class="col" id="respuestaDocente"> </div>
                </div>
            </div>
        </div>
    </div>
</form>