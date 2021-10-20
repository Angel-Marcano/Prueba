<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Clientes extends Controller
{
    
    public function get(){
		$Clientes=\App\Models\cliente::simplepaginate(8);//all();
		
		return view('clientes.lista',compact('Clientes'));
	}
	
	
    
    public function create()
    {
        return view('clientes.crear');
    }

    
    public function store(Request $request)
    {
		$request->validate([
            'nombre' => 'required|max:10',
            'apellido' => 'required|max:10',
            'documento_identidad' => 'required|max:10',
            'direccion' => 'required|max:160',
            'correo' => 'required',
        ]);
        
        try{
			$Cliente= new \App\Models\cliente;
			$Cliente->nombre=$request->nombre;
			$Cliente->apellido=$request->apellido;
			$Cliente->documento_identidad=$request->documento_identidad;
			$Cliente->direccion=$request->direccion;
			$Cliente->type_document=$request->tipo_documento;
			$Cliente->correo=$request->correo;
			
					
			$Cliente->save();
		 return Redirect(route('test_list'))->with('Mensaje','Registro exitoso');
		
		}
		catch(Exception $e){
			return Redirect(route('test_list'))->with('Mensaje_r','Registro fallido');
		}
		
    }

    public function show($id)
    {
        $Cliente=\App\Models\cliente::where('id','=',$id)
                                      ->get();

		return view('clientes.editar',compact('Cliente'));
    }



    
    public function update(Request $request, $id)
    {
		$request->validate([
            'nombre' => 'required|max:10',
            'apellido' => 'required|max:10',
            'documento_identidad' => 'required|max:10',
            'direccion' => 'required|max:160',
            'correo' => 'required',
        ]);
		try{
			$Cliente=\App\Models\cliente::findOrFail($request->id);
     
			$Cliente->nombre=$request->nombre;
			$Cliente->apellido=$request->apellido;
			$Cliente->documento_identidad=$request->documento_identidad;
			$Cliente->direccion=$request->direccion;
			$Cliente->type_document=$request->tipo_documento;
			$Cliente->correo=$request->correo;
			
					
			$Cliente->save();
			return Redirect(route('test_list'))->with('Mensaje','Modificacion exitoso');
	  
	  }catch(Exception $e){
			return Redirect(route('test_list'))->with('Mensaje_r','Registro fallido');
		}
    }

    
    public function destroy($id)
    {
        
        try{
			$Cliente=\App\Models\cliente::findOrFail($id);
        
			$Cliente->delete();
			return Redirect(route('test_list'))->with('Mensaje','Borrado exitoso');
	  
		}
		catch(Exception $e){
			return Redirect(route('test_list'))->with('Mensaje_r','Borrado fallido');
		}
        
        
    }
}
