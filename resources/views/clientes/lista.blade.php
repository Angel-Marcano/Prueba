@extends('Templates.template')

@section('prueba_contenido')

<h1>Clientes</h1>

<br>

@if(Session('Mensaje'))
  <div class="alert alert-success alert-dismissible fade show" role="alert">
    {{Session('Mensaje') ?? ''}}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
@elseif(Session('Mensaje_r'))
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    {{Session('Mensaje') ?? ''}}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
@endif




 
<a href="{{route('test_crear')}}"><button type="button" class="btn btn-info"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button></a>

  

<div class="table-responsive">
    <table class="table table-hover table-bordered ">
        <thead>
            <tr style='background:#98E8E2'>
                <th style="max-width:50px;">Documento identidad</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Direccion</th>
                <th>Acciones</th>

            </tr>
        </thead>
        <tbody id="table_body">
			
			@if(count($Clientes)>0)
				@foreach($Clientes as $cliente)
					<tr>
					@if($cliente['type_document']=='1')
					  <td>V-{{number_format($cliente['documento_identidad'],0,',','.')}}</td>
					@else
					  <td>P-{{$cliente['documento_identidad']}}</td>
					@endif
					
					  <td data-toggle="modal" href='#modal-cliente'>{{$cliente['nombre']}}</td>
					  <td>{{$cliente['apellido']}}</td>
					  <td>{{$cliente['correo']}}</td>
					  <td>{{$cliente['direccion']}}</td>
					  <td>
			
						<a title="Editar Cliente" href="{{route('test_editar',$cliente['id'])}}"><button class="btn btn-md btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button></a>
						
						<form action="{{route('test_destroy',$cliente['id'])}}" method="post" style="display:inline;">
							 @method('DELETE')
							 @csrf
							<button title="Eliminar Cliente" class="btn btn-md btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg></button>
						</form>
					  </td>
					 </tr>
				@endforeach
			@else
			
				<tr><td colspan="6">Sin registros de clientes</td></tr>
				
			@endif

        </tbody>
    </table>

</div>

{{$Clientes->links()}}




<script>

document.getElementById('buscar').addEventListener("keyup",search)


</script>

@endsection
