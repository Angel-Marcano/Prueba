@extends('Templates.template')

@section('prueba_contenido')

<h1>Editar Cliente</h1> 

<div class="col">
  <div class="card">
      
      
      <form action="{{route('test_store')}}" method="post">
        @method('POST')
        @csrf
        <div class="card-body">
                  
            <div id="extras"></div>
            
            <div class="form-group ">
                <label for="nombres">Nombre</label>
                <input type="text" minlength="2" maxlength="10" class="form-control input-format-ca auto-validate-msj" name ="nombre" id="nombre" placeholder="Nombre" value="">
                
            </div>
            
            <div class="form-group">
                <label for="apellidos">Apellido</label>
                <input type="text" minlength="2" maxlength="10" class="input-format-ca form-control auto-validate-msj" id="apellido" name="apellido" placeholder="Apellido" value="">
                
            </div>

            <div class="form-group">
            <label for="tipo_documento">Tipo de Documento identidad</label>
                <select class="form-control form-select auto-validate-msj"  id="tipo_documento" name="tipo_documento">
                    <option value="1" > Cedula </option>
                    <option value="2" > Pasaporte </option>
                    
                </select>
                
            </div>

            <label for="cedula">Documento de identidad</label><br>
            <div class="input-group mb-3">
                
                <span class="input-group-text" id="prefijo_cedula">V-</span>
                <input type="text" class="form-control input-format-nu auto-validate-msj" id="documento_identidad" name="documento_identidad" value="" placeholder="Documento de identidad" aria-label="cedula" aria-describedby="prefijo_cedula" >
                
            </div>
          

            <div class="form-group">
                <label for="correo">Correo</label>
                <input type="email" class="form-control auto-validate-msj" id="correo" name="correo" value="" placeholder="correo">
                
            </div>
            
            <div class="form-group">
                <label for="correo">Direccion</label>
                <input type="text" maxlength="160" class="form-control auto-validate-msj" id="dirrecion" name="direccion" value="" placeholder="direccion">
                
            </div>
            
          
      
        
        </div>
      
        <div class="card-footer text-muted">
          
            <button type="submit" class="btn btn-warning"  style="display:true">Crear</button>
            
            <a href="{{route('test_list')}}">
              <button type="button" class="btn btn-secondary"> Cancelar</button>
            </a>
          
        </div>
      
      </form>
  </div>
</div>




@endsection
