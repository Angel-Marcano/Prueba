document.addEventListener('DOMContentLoaded', function()
{   
    

    
   //  ------ click de salir  -----
    if(document.getElementById('salir')!=null){
        document.querySelector("#salir").addEventListener("click",function(e){
            $.ajax({
                url: base_Url+'Login/fntCerrar_Session',
                type: 'POST',
                data: {},
        
            })
            .done(function(res){
                window.location.replace('../'+res);
            })
        });
    }
//  ------ click de elementos de cobro  -----
    //  ------ click de soportes facturas  -----
        if(document.getElementById('fecha_soporte')!=null){
            document.querySelector("#fecha_soporte").addEventListener("click",function(e){
                get_view_soporte_facturas();
            });
        }
    //  ------ click de elementos de cobro  -----
    if(document.getElementById('guardar_elecobro')!=null){
        document.querySelector("#guardar_elecobro").addEventListener("click",function(e){

                if(v_elecobro()==true){
                    var html="<div class='alert alert-warning'>";
                    html+='<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>';
                    html+='<strong> Enviando datos ... </strong></div>';
                    innerHtml('extras',html);
                    css('extras','display','block');
                    guardar_elecobro();
                }
        });
    }
  
    if(document.getElementById('elecobro-searh')!=null){
        document.querySelector("#elecobro-searh").addEventListener("click",function(e){
            
            var busqueda=Val('searh-elecobro');
            //quitar los espacios busqueda=busqueda.replace(/ /g,"");
                busqueda=busqueda.split(',');
                get_view_elemcobro(busqueda);   
        });
    }
    //  ----- fin del click de elemento de cobro  ----
    //  ----- click EDIFICIOS  ------
    if(document.getElementById('guardar_estructura')!=null){
        document.querySelector("#guardar_estructura").addEventListener("click",function(e){
            if(validate('nombre',array_v=[{'minlegth':5,'maxlegth':20}])['valid']){
                var html="<div class='alert alert-warning'>";
                html+='<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
                html+='<strong>Estado :</strong> Enviando datos ...</div>';
                innerHtml('extras',html);
                guardar_estructura();
            }
        });
    }
    //  ----- fin del click de elemento de cobro  ----
    //  ----- click pripietarios  ------
    if(document.getElementById('guardar_cli')!=null){
        document.querySelector("#guardar_cli").addEventListener("click",function(e){

            if(validate('nombres',array_v=[{'minlegth':1,'maxlegth':20}])['valid'] && validate('apellidos',array_v=[{'minlegth':1,'maxlegth':20}])['valid'] && validate('cedula',array_v=[{'minlegth':7,'maxlegth':8}])['valid'] && validate('estructura',array_v=[{'not_val':'0'}])['valid'] && validate('apartamento',array_v=[{'minlegth':1,'not_val':'0'}])['valid'] && validate('correo',array_v=[{'minlegth':4}])['valid'] && validate('correo_aux',array_v=[{'minlegth':4}])['valid']){
                var html="<div class='alert alert-warning'>";
                html+='<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
                html+='<strong>Estado :</strong> Enviando datos ...</div>';
                innerHtml('extras','html');
                guardar_cliente();

            }
        });
    }
    if(document.getElementById('modificar_cli_guardar')!=null){
        document.querySelector("#modificar_cli_guardar").addEventListener("click",function(e){

          //  if(validate('nombres',array_v=[{'minlegth':1,'maxlegth':20}])['valid'] && validate('apellidos',array_v=[{'minlegth':1,'maxlegth':20}])['valid'] && validate('cedula',array_v=[{'minlegth':7,'maxlegth':8}])['valid'] && validate('estructura',array_v=[{'not_val':'0'}])['valid'] && validate('apartamento',array_v=[{'minlegth':1,'not_val':'0'}])['valid'] && validate('correo',array_v=[{'minlegth':4}])['valid'] && validate('correo_aux',array_v=[{'minlegth':4}])['valid']){
          //   if(validate('nombres',array_v=[{'minlegth':1,'maxlegth':20}])['valid'] && validate('apellidos',array_v=[{'minlegth':1,'maxlegth':20}])['valid'] && validate('cedula',array_v=[{'minlegth':7,'maxlegth':8}])['valid'] && validate('estructura',array_v=[{'not_val':'0'}])['valid'] && validate('apartamento',array_v=[{'minlegth':1,'not_val':'0'}])['valid'] && validate('correo',array_v=[{'minlegth':4}])['valid'] && validate('correo_aux',array_v=[{'minlegth':4}])['valid']){   
                modificar_cliente();

          //  }
        });
    }
    
    if(document.getElementById('cliente-searh')!=null){
        document.querySelector("#cliente-searh").addEventListener("click",function(e){
                get_list_propietarios();                
        });
    }

    
    if(document.getElementById('tipo_documento')!=null){
        document.querySelector("#tipo_documento").addEventListener("click",function(e){
                cambio_prefijo_cedula();                
        });
    }
    //  ----- click de factura  ----

    if(document.getElementById('factura-searh')!=null){
        document.querySelector("#factura-searh").addEventListener("click",function(e){
            
            var busqueda=Val('searh-factura');
            //quitar los espacios busqueda=busqueda.replace(/ /g,"");
                busqueda=busqueda.split(',');
                get_view_factura(busqueda);   
        });
    }
    //  ----- fin del click de factura  ----

    //  ----- click de facturacion  ----
    if(document.getElementById('estructurar')!=null){
        document.querySelector("#estructurar").addEventListener("click",function(e){
           
            if(Val('estructurar')!='0'){
                op_estructura(Val('estructurar'));
                apartamentos();
                
            }
            
        });
    }

    if(document.getElementById('select-inteligente')!=null){
        document.querySelector("#select-inteligente").addEventListener("click",function(e){
           
                if(Val('select-inteligente')=='1'){
                    select_I_marcar_all();
        
                }else if(Val('select-inteligente')=='2'){
                    select_I_desmarcar_all();
                }            
        });
    }

    if(document.getElementById('Cargar-elemento')!=null){
        document.querySelector("#Cargar-elemento").addEventListener("click",function(e){
           
            if(validar_cargar(global_ar['apartamentos_array'])=='1'){

                var ele_cobro_id;
                var ele_cobro_tipo;
                var a;
                var ele_cobro_t=Val('elecobro');
    
                if(ele_cobro_t.indexOf('-')>0){
                    a=ele_cobro_t.split('-');
                                    
                    ele_cobro_id=a[0];
                    ele_cobro_tipo=a[1];
                  
                }         
    
               // var ele_cobro=ele_cobro_id;
                var monto=Val('monto');
                var ele_cobro_nombre=innerHtml("p"+ele_cobro_id,'');
    
    
                if(global_ar['apartamentos_array']==0){
    
                    var cont=global_ar['apartamentos_check'].length;
                    var i=0;
    
                    
                    if(ele_cobro_tipo=='2'){
                        monto=monto*cont;
                    }
    
                    var msj="Seguro de distribuir el monto de "+monto+" por concepto de "+ele_cobro_nombre+" entre los apartamentos:\n";
                    
    
                    global_ar['apartamentos_check'].forEach(ele => {
                        i++;
                        
                        if(cont==i){
                            msj+="Nº"+ele['numero']+"?\n";
                        }else{msj+="Nº"+ele['numero']+", ";}
                    });
                    global_ar['monto_inv']=(monto/global_ar['tasa_dolar'])/cont;
                    global_ar['monto_total']=(monto/global_ar['tasa_dolar']);
                    msj+="Monto individual sera de "+monto/cont+" VES - ("+(monto/global_ar['tasa_dolar'])/cont+" $)";
                    
                   
                    ftnMensaje_sistema('m',{'type':'warning','mensaje':msj,'txtConfirm':'Si,continuar','txtCancel':'Cancelar','functionConfirm':()=>{guardar_facturacion();},'functionCancel':()=>{ftnMensaje_sistema('s',{'title':'Cancelado'});} });
    
                }else{
                    
                    //global_ar['apartamentos'][0]['apartamentos'].length
                    var edificios=global_ar['apartamentos'];
                    var n_apartamentos=0;
    
                    for (let i = 0; i < edificios.length; i++) {
                        n_apartamentos+=edificios[i]['apartamentos'].length;
                        
                    }
                    if(ele_cobro_tipo=='2'){
                        monto=monto*n_apartamentos;
                    }
    
                    global_ar['monto_inv']=(monto/global_ar['tasa_dolar'])/n_apartamentos;
                    global_ar['monto_total']=(monto/global_ar['tasa_dolar']);
    
                    //alert("mesaje array apart "+n_apartamentos);
                    var msj="¿Seguro de distribuir el monto de "+monto+"VES ("+(monto/global_ar['tasa_dolar'])+" $) por concepto de "+ele_cobro_nombre+" entre los "+n_apartamentos+" apartametos seleccionados? (monto individual:"+monto/n_apartamentos+"VES ("+(monto/global_ar['tasa_dolar'])/n_apartamentos+" $)";
                   
                    ftnMensaje_sistema('m',{'type':'warning','mensaje':msj,'txtConfirm':'Si,continuar','txtCancel':'Cancelar','functionConfirm':()=>{guardar_facturacion();},'functionCancel':()=>{ftnMensaje_sistema('s',{'title':'Cancelado'});} });
    
                }
    
            }else{
                alert("complete todos los campos");
            }
                           
        });
    }


    if(document.getElementById('finalizar-facturacion')!=null){
        document.querySelector("#finalizar-facturacion").addEventListener("click",function(e){
            
            msj="Si finaliza la facturacion de "+$("#fecha_selec").val()+" ya no podra efectuar cambios en las facturas de este mes";   
            ftnMensaje_sistema('m',{'type':'warning','mensaje':msj,'txtConfirm':'Si,continuar','txtCancel':'Cancelar','functionConfirm':()=>{finalizar_facturacion();},'functionCancel':()=>{ftnMensaje_sistema('s',{'title':'Cancelado'});} });
           
        });
    }

    //  ----- fin del click de facturacion  ----

    //  -----  click fondo preventivo  -----  //
    if(document.getElementById('operacion')!=null){
        document.querySelector("#operacion").addEventListener("click",function(e){
            
            var ope=Val('operacion');
            if(ope=='2'){
                document.querySelector("#ope_cliente").style.display="none";
                document.querySelector("#ope_intercambio").style.display="none";
                document.querySelector("#ope_administrador").style.display="block";

            }else if(ope=='1'){
                document.querySelector("#ope_cliente").style.display="block";
                document.querySelector("#ope_intercambio").style.display="none";
                document.querySelector("#ope_administrador").style.display="none";
                
            }else if(ope=='3'){
                document.querySelector("#ope_cliente").style.display="none";
                document.querySelector("#ope_intercambio").style.display="block";
                document.querySelector("#ope_administrador").style.display="none";
                
            }
        });
    }

    if(document.getElementById('guardar_operacion_fondo_especial')!=null){
        document.querySelector("#guardar_operacion_fondo_especial").addEventListener("click",function(e){
            
            if(validar_ope_fondo_especial()=="1"){
                
                msj_ope();
            
            }else{
                alert("Verifique los campos solicitados por favor");
            }
        });
    }

})
var global=[];
var apartamentos_global;
var global_ar=[];

function add_propietario(){
     css('guardar_cli','display','true');
      css('modificar_cli_guardar','display','none');
      
      css('estructura','display','true');
      css('apartamento','display','true');
      
      Val('nombres',null);
        Val('apellidos',null);
        Val('cedula',null);
        Val('tipo_documento',1);
        Val('estructura',0);
        Val('apartamento',null);
        Val('correo',null);
        Val('correo_aux',null);
}
    
 function modificar_propietario(id_array){
     
     
      css('guardar_cli','display','none');
      css('modificar_cli_guardar','display','true');
       css('estructura','display','none');
      css('apartamento','display','none');
     
        Val('nombres',res_aux[id_array]['nombres']);
        Val('apellidos',res_aux[id_array]['apellidos']);
        Val('cedula',res_aux[id_array]['cedula']);
        Val('tipo_documento',res_aux[id_array]['tipo_documento']);
        
        if(res_aux[id_array]['estructura']=="Torre A"){ Val('estructura',1); }
         if(res_aux[id_array]['estructura']=="Torre B"){ Val('estructura',2); }
          if(res_aux[id_array]['estructura']=="Torre C"){ Val('estructura',3); }
        
        
        
        Val('apartamento',res_aux[id_array]['numero']);
        Val('correo',res_aux[id_array]['correo']);
        Val('correo_aux',res_aux[id_array]['correo_aux']);
        
        
    }

function cambio_prefijo_cedula(){
    var valor=Val('tipo_documento');
    console.log(valor);
    if(valor=='1'){
        innerHtml('prefijo_cedula','V-');
    }else if(valor=='2'){
        innerHtml('prefijo_cedula','P-');
    }
}



function msj_ope(){
   
    var ope=Val('operacion');
    var apart=[];

    if(ope=='1'){

       
        var i=0;
        var mensaje="";
        if(Val('TIPO_DE_INGRESO')=="USD"){
             mensaje="Desea registrar el pago por un monto de "+Val('monto_ope_cli')+"$ , por parte de los apartamentos:\n";
        }else{
             mensaje="Desea registrar el pago por un monto de "+Val('monto_ope_cli')+"VED , por parte de los apartamentos:\n";  
        }
        
        for(var i=0; document.getElementsByName("apartamentos[]").length > i; i++ ){
		 
			if(document.getElementsByName("apartamentos[]")[i].checked==true){
				apart.push(document.getElementsByName("apartamentos[]")[i]['value']);
				
			}
		}
				
         var cont=apart.length;
          
        for(var i=0;apart.length>i;i++){
            
            if(cont==(1+i)){
                mensaje+="Nº"+apart[i]+"?\n";
            }else{mensaje+="Nº"+apart[i]+", ";}
        }
       
         

        ftnMensaje_sistema('m',{'type':'warning','mensaje':mensaje,'txtConfirm':'Si,continuar','txtCancel':'Cancelar','functionConfirm':()=>{guardar_ope_cli();},'functionCancel':()=>{ftnMensaje_sistema('s',{'title':'Cancelado'});} });

    }else if(ope=='2'){
        var mensaje="¿Desea realizar un egreso por concepto de '"+Val('descripcion')+"' por un monto de "+Val('monto_ope_adm')+"$ ?\n";
		ftnMensaje_sistema('m',{'type':'warning','mensaje':mensaje,'txtConfirm':'Si,continuar','txtCancel':'Cancelar','functionConfirm':()=>{guardar_ope_adm();},'functionCancel':()=>{ftnMensaje_sistema('s',{'title':'Cancelado'});} });
 
    }else if(ope=='3'){
        var mensaje="¿Desea registrar un intercambio a divisas por un monto de "+(Val('monto_ope_inter')*Val('tasa_cambio'))+" VED, obteniendo un saldo de "+Val('monto_ope_inter')+" $ a cambio?\n";
        ftnMensaje_sistema('m',{'type':'warning','mensaje':mensaje,'txtConfirm':'Si,continuar','txtCancel':'Cancelar','functionConfirm':()=>{guardar_ope_intercambio();},'functionCancel':()=>{ftnMensaje_sistema('s',{'title':'Cancelado'});} });
 
    }
}

function validar_ope_fondo_especial(){
    var ope=Val('operacion');
    var res=1;

    if(ope=='1'){
        
        if(Val('monto_ope_cli').length<1 ){
            res=0;

        }else if(Val('estructura')=='0'){
            res=0;

        }
        else if(Val('TIPO_DE_INGRESO')=='0'){
           res=0;

        }
        var id=Val('estructura');
        
        if(id.indexOf('-')>0){

        }else{
            if( document.getElementsByName("apartamentos[]").length<1){
                res=0;
            }
        }
       
        return res;

    }else if(ope=='2'){

        if(Val('monto_ope_adm').length<1 ){
            res=0;

        }else if( Val('descripcion').length<5){
            res=0;

        }

        return res;

    }else if(ope=='3'){

        if(Val('monto_ope_inter').length<1 ){
            res=0;

        }else if( Val('descripcion_inter').length<5){
            res=0;

        }else if(Val('tasa_cambio').length<1){
            res=0;
        }
        return res;
    }
}

// facturacion
function Confirmar_eliminar_ele_factura(ele,id_cobro){
    var datos={'id':ele,'fecha':Val('fecha_selec'),'id_estructura':Val('estructura'),'id_cobro':id_cobro}
    $.ajax({
        url: base_Url+'Facturar/cancelar_ele_factura',
        type: 'POST',
        data: {data:datos},

    })
    .done(function(res){
        

        if(res=='1'){
           // elementos_cobro_usados();
            ftnMensaje_sistema('s',{'title':'Proceso Exitoso','mensaje':'Todas las acciones fueron realizada satisfactoriamente','type_msj':'success'});
            
        }else{
            ftnMensaje_sistema('s',{'title':'Proceso Fallido','mensaje':'Alguna acciones no fueron realizada satisfactoriamente','type_msj':'error'});
            
        }
       
    });

}
function eliminar_gasto(id,id_ele_cobro){
    act_sms_eliminar_ele_cobro(id,id_ele_cobro);
}
function act_sms_eliminar_ele_cobro(ele,id_cobro){
   
    var msj=" Al borrar se eliminara el item selecionado, al hacer eso se podra cargar de nuevo para una segunda verificación";
    ftnMensaje_sistema('m',{'type':'warning','mensaje':msj,'txtConfirm':'Borrar','txtCancel':'Cancelar','functionConfirm':()=>{Confirmar_eliminar_ele_factura(ele,id_cobro);},'functionCancel':()=>{ftnMensaje_sistema('s',{'title':'Cancelado'});} });
    
}


function finalizar_facturacion(){
    var datos={'fecha':Val('fecha_selec'),'estructura':Val('estructura')}
    $.ajax({
        url: base_Url+'Facturar/finalizar',
        type: 'POST',
        data: {data:datos},

    })
    .done(function(res){
        res= JSON.parse(res);
        console.log(res);

        if(res['res']=='1'){
            ftnMensaje_sistema('s',{'title':'Proceso Exitoso','mensaje':'Todas las acciones fueron realizada satisfactoriamente','type_msj':'success'});
            
            window.location.replace("Facturas");
        }
    });
}

function guardar_facturacion(){

    var estructura_id;
    var a;
    var id=Val('estructura');
    var is_array_estructura=0;

    var apartementos_check;

    if(id.indexOf('-')>0){
        a=id.split('-');
        
        a.pop();
        
        estructura_id=a;
        
        apartementos_check=global_ar['apartamentos'];
        is_array_estructura=1;

    }else{
        estructura_id=Val('estructura');
        apartementos_check=global_ar['apartamentos_check'];
    }

    //ahora elecobro

            var ele_cobro_id;
            var ele_cobro_tipo;
            var a;
            var ele_cobro_t=Val('elecobro');

            if(ele_cobro_t.indexOf('-')>0){
                a=ele_cobro_t.split('-');
                                
                ele_cobro_id=a[0];
                ele_cobro_tipo=a[1];
              
            }   

            
    var datos={'i_a_e':is_array_estructura,'apartamentos':apartementos_check,'fecha':Val('fecha_selec'),'id_estructura':estructura_id,'id_ele_cobro':ele_cobro_id,'monto_inv':global_ar['monto_inv'],'monto_total':global_ar['monto_total']}
   
    $.ajax({
        url: base_Url+'Facturar/guardar',
        type: 'POST',
        data: {data:datos},

    })
    .done(function(res){
        res= JSON.parse(res);
    

        if(res['res']=='1'){
            ftnMensaje_sistema('s',{'title':'Proceso Exitoso','mensaje':'Todas las acciones fueron realizada satisfactoriamente','type_msj':'success'});
                       
           limpiar_facturacion();
        }
    });

}

function check_apartamentos(){
    var apartamentos_select=[];

    apartamentos_global.forEach(ele => {
        if($("#ap"+ele['numero']).prop('checked')==true){
            apartamentos_select.push(ele);
        }
        
    });

    global_ar['apartamentos_check']=apartamentos_select;
    return apartamentos_select;
       
    
}

function validar_cargar(id_estructura){
    
    var res=1;
    if(id_estructura==0){
        var n_apart=check_apartamentos();
        if(n_apart.length<1){
            res=0;
        }
    }

    if(Val('elecobro')=='0'){
        res=0;
    }
    if(Val("monto").length<1){
        res=0;
    }
   
    return res;
}



function limpiar_facturacion(){
    //elementos_cobro_usados();
    $("#monto").val("");
    $("#elecobro").val("0");

    select_I_desmarcar_all();

}

function select_I_marcar_all(){
    
    apartamentos_global.forEach(ele => {
        $("#ap"+ele['numero']).prop('checked',true);        
    });

}


// view foto soporte

function v_soporte(){
    let res=true;
    res=validate('descripcion',array_v=[{'minlegth':5,'maxlegth':20}])['valid'];
    res=validate('archivo',array_v=[{'not_val':'0'}])['valid'];
    return res;
}


//    VIEW ELEMENT COBRO




//var ajax_data=[{'id':'test_nombre','name':'nombre','required':true,'t_archivo':false} , {'id':'inputFile','name':'archivo','required':true,'t_archivo':true}];
function guardar_soporte2(){

    var ajax_data=[{'id':'descripcion','name':'descripcion','required':true,'t_archivo':false},{'id':'archivo','name':'archivo','required':true,'t_archivo':true},{'id':'estructura','name':'estructura','required':true,'t_archivo':false},{'id':'fecha','name':'fecha','required':true,'t_archivo':false}];
    
    ajax('{{route("factura.nuevo_soporte")}}',ajax_data,alert("alert"));
    
}



//   END VIEW ELEMENT COBRO
//   VIEW EDIFICIOS


//   ----END VIEW EDIFICIO  -----
//  ----- VIEW UPDATE TASA DOLAR -----

//   ----END VIEW EDIFICIO  -----
//  ----- VIEW UPDATE propietarios -----

function guardar_cliente(conf='s'){

    var apart=$("#apartamento").val();
    apart=apart.split(',');

    var datos={'nombres':Val('nombres'),'apellidos':Val('apellidos'),'cedula':Val('cedula').toString(),'tipo_documento':Val('tipo_documento'),'estructura':Val('estructura'),'correo':Val('correo'),'correo_aux':Val('correo_aux'),'apartamento':apart,'conf':conf}
        $.ajax({
            url: base_Url+'Cliente/Nuevo_cliente',
            type: 'POST',
            data: {data:datos},
    
        })
        .done(function(res){
            res=JSON.parse(res);

            if(conf=='s'){
                
                var c="";
                if(res['cedula']=="Error"){
                    c+="Cliente: \nya existe, no aplican cambios\n\n";
                }else{
                    c+="Cliente: \nSe registrara\n\n";
                }
                c+="Apartamentos:\n";
                res['apartamentos'].forEach(apartamento => {
                    if(apartamento['est']=='o'){
                        c+="- Apartamento "+apartamento['n_ap']+" ocupado , no aplican cambios\n";
                    }else{
                        c+="- Apartamento "+apartamento['n_ap']+" se agregara y ocupara\n";
                    }
                });            
                ftnMensaje_sistema('m',{'msj_type':'success','title':'¿ Desea realizar estas acciones ?','txtConfirm':'Si,continuar','txtCancel':'Cancelar','mensaje':c,'functionConfirm':()=>{guardar_cliente('c');},'functionCancel':()=>{ftnMensaje_sistema('s',{'title':'Cancelado'});} });

            }else{
               // ftnMensaje_sistema('s',{'title':'Proceso Exitoso','mensaje':'Todas las acciones fueron realizada correctamente','msj_type':'success'});
               
               setTimeout(function(){
                     window.location.replace('');
                },4800);
                swal({
                    title: 'Exito',
                    text: 'Proceso Exitoso',
                    type: 'success',
                    timer: 5000,
                    showCancelButton: false,
                    showConfirmButton: false
                });
                
            }
           
        });
}



function index(palabra,caracter){
    var band=0;
    for (let index = 0; index < palabra.length; index++) {
        if(palabra[index]==caracter){
            band=1;
        }
        
    }
    return band;
}
    function formatInt(numero,tipo){
        var n=numero.toString();
    
        if(index(n,',')>0){

            n=n.split(',');
            decimales=n[1];
            l_n=n[0].length;
            n=n[0];

        }else{
            decimales='00';
            l_n=n.length;
            
        }

        var N_f="";

        var N_F="";
        var cont=0;
        
        for (let i = l_n-1; i >= 0; i--) {
            cont++;
            if(cont==3){
                if(0==i){
                    N_f=N_f+n[i];
                   
                }else{
                    
                    N_f=N_f+n[i]+'.';
                }
                
                cont=0;
            }else{
                N_f=N_f+n[i];
            }        
            
        }

        for (let i = N_f.length-1; i >= 0; i--) {
            N_F=N_F+N_f[i];
        }

        if(tipo=='cedula'){
            return N_F;
        }else{
            return N_F+','+decimales;
        }
        

    }
    
    var res_aux;
    
   

    

        //   ---- END VIEW PROPIETARIOS  -----
        //   - - - - -  VIEW PERFIL - - - - -
       

     //   ---- END VIEW PERFIL  -----
    //   - - - - -  VIEW FACTURA - - - - -


    

      //   ---- END VIEW FACTURA  -----
    //   - - - - -  VIEW soportes facturas - - - - -
    function get_view_soporte_facturas(){

        let spinner='<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';
        $("#cargando").html(spinner+" Cargando... por favor espere... "+spinner+'<br>');
        
        document.querySelector("#cargando").style.display="block";
        
      //  var ajax_data=[{'id':'fecha_soporte','name':'fecha'}];
        
        //ajax(base_Url+'Factura/Soportes_facturas',ajax_data,(a='aux')=>{innerViewSoporte(a);});

        $.ajax({
            url: base_Url+'Factura/Soportes_facturas',
            type: 'POST',
            data: {fecha:Val('fecha_soporte')},
    
        })
        .done(function(res){
        
            innerViewSoporte(res);
        })
    }

    function innerViewSoporte(res){

        res= JSON.parse(res);
        var html="";
        if(res["Soportes"].length>0){
            res["Soportes"].forEach(soporte => {
                
                html+='<div class="col"><div class="card shadow-sm">';
                html+='<img src="/SAF/extras/img/soportes/'+soporte['dir_img']+'" height="500"/>';
                html+='<div class="card-body">';
                html+='<p class="card-text">'+soporte['descripcion']+'</p>';
                html+='<div class="d-flex justify-content-between align-items-center"><div class="btn-group">';
                html+='<a class="btn btn-sm btn-outline-secondary link_soporte" target="_blank" href="/SAF/extras/img/soportes/'+soporte['dir_img']+'"> Ver </a>';
                html+='</div></div></div></div></div>';
            })
        }else{
            html='No hay soportes ingregados para esta fecha';
        }
  
                innerHtml("cargando","");
                document.querySelector("#cargando").style.display="none";
               // document.querySelector("#title-buscador").style.display="block";
                innerHtml("soportes_facturas",html);
    }
        
        

    // ************************//
    //                         //
    //    STRING TO BASE64     //
    //                         //
    //*************************//
      

        function encodeBase64(textoPlano) {
            let base64s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            textoPlano = escape(textoPlano);
            let bits, dual, i = 0, encOut = '';
            while (textoPlano.length >= i + 3) {
                bits =
                    (textoPlano.charCodeAt(i++) & 0xff) << 16 |
                    (textoPlano.charCodeAt(i++) & 0xff) << 8 |
                    textoPlano.charCodeAt(i++) & 0xff;
                encOut +=
                    base64s.charAt((bits & 0x00fc0000) >> 18) +
                    base64s.charAt((bits & 0x0003f000) >> 12) +
                    base64s.charAt((bits & 0x00000fc0) >> 6) +
                    base64s.charAt((bits & 0x0000003f));
            }
            if (textoPlano.length - i > 0 && textoPlano.length - i < 3) {
                dual = Boolean(textoPlano.length - i - 1);
                bits =
                    ((textoPlano.charCodeAt(i++) & 0xff) << 16) |
                    (dual ? (textoPlano.charCodeAt(i) & 0xff) << 8 : 0);
                encOut +=
                    base64s.charAt((bits & 0x00fc0000) >> 18) +
                    base64s.charAt((bits & 0x0003f000) >> 12) +
                    (dual ? base64s.charAt((bits & 0x00000fc0) >> 6) : '=') +
                    '=';
            }
            return encOut
        }




    // ************************//
    //                         //
    //  msj to sistem v 2.0    //
    //                         //
    //*************************//

function ftnMensaje_sistema(type='s',confi=test_msj){
    //por defecto
    if(confi['type_msj']==null){confi['type_msj']="warning";}
    if(confi['title']==null){confi['title']="Aviso";}
    if(confi['mensaje']==null){confi['mensaje']="";}
    // fin 
    if(type=='s'){
        swal({
            title: confi['title'],
            text: confi['mensaje'],
            type: confi['type_msj'],
            timer: 3500,
            showCancelButton: false,
            showConfirmButton: false
        });
    }else if(type=='m'){
        swal({
            title: confi['title'],
            text: confi['mensaje'],
            type: confi['type_msj'],
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: confi['txtConfirm'],
            cancelButtonText: confi['txtCancel'],
            closeOnConfirm: true,
            closeOnCancel: false

        },function(isConfirm){
                if (isConfirm) {
                  confi['functionConfirm']();
                } else{
                  confi['functionCancel']();
                }
            }
        );

    }else if(type=='ok'){
        swal({
            title: confi['title'],
            text: confi['mensaje'],
            type: confi['type'],
            showCancelButton: false,
            //confirmButtonColor: "#DD6B55",
            confirmButtonText: confi['txtConfirm'],
            //cancelButtonText: confi['txtCancel'],
            closeOnConfirm: true,
            closeOnCancel: false

        },function(isConfirm){
                if (isConfirm) {
                  confi['functionConfirm']();
                }
            }
        );

    }
}









//pagos logica
function cambio_medio(){
	validate('medio_pago',[{'select':'0'}]);
	var medio=document.getElementById('medio_pago').value;
	
	if(medio=='0'){
						
			css('div_divisa','display','none');
			css('div_ves','display','none');
	}
	else if(medio=='Divisa'){
			css('div_divisa','display','block');
			css('div_ves','display','none');
	}else{
		
		css('div_divisa','display','none');
			css('div_ves','display','block');
	}		
}


function validar_registro_pago(){
		//validar segun medio
		var medio=document.getElementById('medio_pago').value;
	
	if(medio=='0'){
						
		validate('medio_pago',[{'select':'0'}]);
	}
	else if(medio=='Divisa'){
		
			var monto=Val('monto_usd');
			if(validate('monto_usd',[{'minlegth':1,'not_val':'0','positive_value':'true'}])['valid'] ){
					guardar_pago();
				}
			
	}else{
		
		var monto=Val('monto_ves');
		var ref=Val('ref');
		
		if(validate('monto_ves',[{'minlegth':1,'not_val':'0','positive_value':'true'}])['valid']==true && validate('ref',[{'minlegth':4,'not_val':' ','positive_value':'true'}])['valid']==true ){
				guardar_pago();
			}
	}	
	
}


