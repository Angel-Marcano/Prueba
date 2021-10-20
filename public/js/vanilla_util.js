const a_ma=[' ','A','Á','B','C','D','E','É','F','G','H','I','Í','J','K','L','M','N','Ñ','O','Ó','P','Q','R','S','T','U','Ú','V','W','X','Y','Z'];
const a_mi=[' ','a','á','b','c','d','e','é','f','g','h','i','í','j','k','l','m','n','ñ','o','ó','p','q','r','s','t','u','ú','v','w','x','y','z'];
const a_es=[',','.','-','*','_','?','¿','&','$','#','!','+','/','%','"','º','\'','ª','|','@','~€','ç','Ç','`',']','[','(',')','º','~','€','¬','·'];
const a_nu=['0','1','2','3','4','5','6','7','8','9'];



function enviar(form) {
    var persona = new FormData(form);
    var req = ajaxRequest("upload.php");
    req.send(persona);
}
function ajaxRequest(url) {
    if (window.XMLHttpRequest) {
        var request = new XMLHttpRequest();
    } else if(window.ActiveXObject) {
        var request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    request.onload = function(Event) {
        if (request.status == 200) {
            var response = JSON.parse(request.responseText);
            if(response.success){
                alert("Persona procesada exitosamente");
            } else {
                alert("Hubo un problema al procesar, codigo: " + response.status);
            }
        }
    };
}





document.addEventListener('DOMContentLoaded', function()
{
    const btnEnviar = document.querySelector("#btnEnviar");
    const inputFile = document.querySelector("#inputFile");
    //btnEnviar.addEventListener("click",function(e){ajax('upload.php',ajax_data);});
        
//  ______________________-
 
   
    // .input-format-ma letras solamente
    // .input-format-ma-es letras y caracteres especiales solamente
    // .input-format-ma-es-nu letras,especiales y numero
    // .input-format-ma-nu letras y numero


//Click Event Code 

    // ************************//
    //                         //
    //   ahora las Capize      //
    //                         //
    //*************************//
    if(document.querySelectorAll(".input-format-ca")!=null){

        document.querySelectorAll(".input-format-ca").forEach(element => {

            element.addEventListener("keydown",function(e){
                if(e['key']=='Backspace'){}
            
                    if(a_ma.indexOf(e['key'])!='-1' || a_mi.indexOf(e['key'])!='-1' || a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                        e.preventDefault();
                    }
                
                    id=(e['target']['id']);
                    
                    
                    if(a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                        le='';
                    }else{
                        le='Q';
                    // le=l_format(e['key'],'MA');
                    p=document.getElementById(id).value;
                    l=p.length;
            
                    if(l==0 || p[l-1]==' '){
                            le=l_format(e['key'],'MA');
                    }else{
                        le=l_format(e['key'],'MI');
                    }
                    
                    }
                
                    p=document.getElementById(id).value;
                    
                    document.getElementById(id).value=p+le;
            });

        });
    }

    // ************************//
    //                         //
    //   ahora las MAYUSCULA   //
    //                         //
    //*************************//
    if(document.querySelector(".input-format-ma")!=null){
        document.querySelector(".input-format-ma").addEventListener("keydown",function(e)
        {
            
            if(e['key']=='Backspace'){}

            if(a_ma.indexOf(e['key'])!='-1' || a_mi.indexOf(e['key'])!='-1' || a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                e.preventDefault();
            }
        
            id=(e['target']['id']);
            
            if(a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                le='';
            }else{
                le=l_format(e['key'],'MA');
            }
        

            p=document.getElementById(id).value;
            document.getElementById(id).value=p+le;
        // return 'a';
        });
    }

    if(document.querySelector(".input-format-ma-es")!=null){
        document.querySelector(".input-format-ma-es").addEventListener("keydown",function(e)
        {
            
            if(e['key']=='Backspace'){}

            if(a_ma.indexOf(e['key'])!='-1' || a_mi.indexOf(e['key'])!='-1' || a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                e.preventDefault();
            }
        
            id=(e['target']['id']);
            
            if(a_nu.indexOf(e['key'])!='-1'){
                le='';

            }else if(a_es.indexOf(e['key'])!='-1'){
                le=e['key'];
            }else{
                le=l_format(e['key'],'MA');
            }
        

            p=document.getElementById(id).value;
            document.getElementById(id).value=p+le;
        // return 'a';
        });
    }

    if(document.querySelector(".input-format-ma-es-nu")!=null){
        document.querySelector(".input-format-ma-es-nu").addEventListener("keydown",function(e)
        {
            
            if(e['key']=='Backspace'){}

            if(a_ma.indexOf(e['key'])!='-1' || a_mi.indexOf(e['key'])!='-1' || a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                e.preventDefault();
            }
        
            id=(e['target']['id']);
            
            if(a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                le=e['key'];

            }else{
                le=l_format(e['key'],'MA');
            }
        
            p=document.getElementById(id).value;
            document.getElementById(id).value=p+le;
        // return 'a';
        });
    }

    if(document.querySelector(".input-format-ma-nu")!=null){
        document.querySelector(".input-format-ma-nu").addEventListener("keydown",function(e)
        {
            
            if(e['key']=='Backspace'){}

            if(a_ma.indexOf(e['key'])!='-1' || a_mi.indexOf(e['key'])!='-1' || a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                e.preventDefault();
            }
        
            id=(e['target']['id']);
            
            if(a_es.indexOf(e['key'])!='-1'){
                le='';
            }else if(a_nu.indexOf(e['key'])!='-1'){
                le=e['key'];
            }else{
                le=l_format(e['key'],'MA');
            }
        

            p=document.getElementById(id).value;
            document.getElementById(id).value=p+le;
        
        });
    }

    

    // ************************//
    //                         //
    //   ahora las minusculas  //
    //                         //
    //*************************//
    if(document.querySelector(".input-format-mi")!=null){
        document.querySelector(".input-format-mi").addEventListener("keydown",function(e)
        {
            
            if(e['key']=='Backspace'){}

            if(a_ma.indexOf(e['key'])!='-1' || a_mi.indexOf(e['key'])!='-1' || a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                e.preventDefault();
            }
        
            id=(e['target']['id']);
            
            if(a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                le='';
            }else{
                le=l_format(e['key'],'MI');
            }

            p=document.getElementById(id).value;
            document.getElementById(id).value=p+le;
        
        });
    }

    if(document.querySelector(".input-format-mi-es")!=null){
        document.querySelector(".input-format-mi-es").addEventListener("keydown",function(e)
        {
            
            if(e['key']=='Backspace'){}

            if(a_ma.indexOf(e['key'])!='-1' || a_mi.indexOf(e['key'])!='-1' || a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                e.preventDefault();
            }
        
            id=(e['target']['id']);
            
            if(a_nu.indexOf(e['key'])!='-1'){
                le='';

            }else if(a_es.indexOf(e['key'])!='-1'){
                le=e['key'];
            }else{
                le=l_format(e['key'],'MI');
            }
        

            p=document.getElementById(id).value;
            document.getElementById(id).value=p+le;
        });
    }

    if(document.querySelector(".input-format-mi-es-nu")!=null){
        document.querySelector(".input-format-mi-es-nu").addEventListener("keydown",function(e)
        {
            
            if(e['key']=='Backspace'){}

            if(a_ma.indexOf(e['key'])!='-1' || a_mi.indexOf(e['key'])!='-1' || a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                e.preventDefault();
            }
        
            id=(e['target']['id']);
            
            if(a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                le=e['key'];

            }else{
                le=l_format(e['key'],'MI');
            }
        
            p=document.getElementById(id).value;
            document.getElementById(id).value=p+le;
        });
    }

    if(document.querySelector(".input-format-mi-nu")!=null){
        document.querySelector(".input-format-mi-nu").addEventListener("keydown",function(e)
        {
            
            if(e['key']=='Backspace'){}

            if(a_ma.indexOf(e['key'])!='-1' || a_mi.indexOf(e['key'])!='-1' || a_nu.indexOf(e['key'])!='-1' || a_es.indexOf(e['key'])!='-1'){
                e.preventDefault();
            }
        
            id=(e['target']['id']);
            
            if(a_es.indexOf(e['key'])!='-1'){
                le='';
            }else if(a_nu.indexOf(e['key'])!='-1'){
                le=e['key'];
            }else{
                le=l_format(e['key'],'MI');
            }
        

            p=document.getElementById(id).value;
            document.getElementById(id).value=p+le;
        
        });
    }

    if(document.querySelector(".input-format-nu")!=null){
        document.querySelector(".input-format-nu").addEventListener("keydown",function(e)
        {
            
            if(e['key']!='Backspace'){ e.preventDefault();
                
                id=(e['target']['id']);
                if(a_nu.indexOf(e['key'])!='-1'){
                    var le=e['key'];
                }else{
                    var le="";
                }

                p=document.getElementById(id).value;
                document.getElementById(id).value=p+le;

            }
        
        });
    }
   

});

    // ************************//
    //                         //
    // FUNCTION WITH FUNCTION  //
    //                         //
    //*************************//
    // id   - nombre al enviarlo   -  opligatorio? - es un archivo )
    //var ajax_data=[{'id':'test_nombre','name':'nombre','required':true,'t_archivo':false} , {'id':'inputFile','name':'archivo','required':true,'t_archivo':true}];

    function ajax(url,ajax_data,function_success=()=>console.log('fun'),promise='json'){
        
       var band=1;
        var formData = new FormData();
        let test={};

        ajax_data.forEach(e=> {
            if(e['t_archivo']!=false && e['t_archivo']!=null ){

                if(document.getElementById(e['id']).files.length>0){
                    if(e['name']!=null){
                        formData.append(e['name'],document.getElementById(e['id']).files[0]);
                    
                    }else{
                        formData.append(e['id'],document.getElementById(e['id']).files[0]);
                    }
                }else{ if (e['required']==true || e['required']==null){band=0; console.log('ajax no se ejecutara campo archivo requerido');}else{ console.log("archivo vacio pero no afecta")}}
            
            }else{
                if(e['is_val']!=true || e['is_val']==null){
                    if(Val(e['id'])!=""){
                        if(e['name']!=null){
                            formData.append(e['name'],Val(e['id']));
                        }else{ formData.append(e['id'],Val(e['id'])); }
                    }else{
                        if(e['required']==true || e['required']==null){ band=0; console.log("falta un dato, ajax cancelado");}else{console.log("falta dato pero no importa");}
                    }

                }else{
                   
                    formData.append(e['name'],e['id']);
                }
            }
            
            
        });

        if(band==1){
            fetch(url, {
                method: 'POST',
                body: formData,
            })
                .then(respuesta => respuesta.text() ) //PARA TEXTO respuesta.text()
                .then(res => {
                    function_success(res);
                });
        }


       /* 
        if (inputFile.files.length > 0) {
            let formData = new FormData();
            formData.append("archivo", inputFile.files[0]); // En la posición 0; es decir, el primer elemento
            
            
            ajax_data.forEach(e=> {
                formData.append(e, Val(e));
            });

            fetch(url, {
                method: 'POST',
                body: formData,
            })
                .then(respuesta => respuesta.text())
                .then(decodificado => {
                    console.log(decodificado);
                });
        } else {
            // El usuario no ha seleccionado archivos
            alert("Selecciona un archivo");
        }
        */
    }



    // ************************//
    //                         //
    //   NOW INPUT VALIDATE    //
    //                         //
    //*************************//
/*
console.time("jquery test");

const div = $('.target');

console.timeEnd("jquery test");

console.time("vainilla test");

const vainillaDiv = document.querySelector('.target');

console.timeEnd("vainilla test");
*/

// recibe 3 parametros:
// array con las validaciones, id a validar y mesaje opcional.
//const array_v=[{'maxlegth':5,'minlegth':3,'not_val':'A12','val':'1234','select':'0','number':true}];
// 

function validate(id,array_v=[{'not_val':'','minlegth':3}],mensaje=''){
    val=document.getElementById(id).value; //aqui se puede usas Val(id);
    val_l=val.length;
    inp_valid=true;
    msj=[];
    array_v.forEach(e => {
	
        if(e['not_val']!=null && e['not_val']==val){
			
            inp_valid=false;if(val!='' && val=='0'){msj.push("valor no puede ser igual a "+e['not_val']);}else{msj.push("Campo requerido");}
        }
        if(e['maxlegth']!=null && e['maxlegth']<val_l){
			
            inp_valid=false;
            msj.push("Limite de "+e['maxlegth']+" caracteres superado");
        }
        if(e['minlegth']!=null && e['minlegth']>val_l){
			
            inp_valid=false;msj.push("Campo debe tener al menos "+e['minlegth']+" caracteres");
        }
        if(e['val']!=null && e['val']!=val){
			
            inp_valid=false;msj.push("Debe ser igual a "+ e['val']);
        }
        if(e['number']!=null && e['number']==true && isNaN(val)){
			
            inp_valid=false;msj.push("No es un numero valido");
        }
         if(e['select']!=null && e['select']==val){
			 
            inp_valid=false;if(val!='' && val!='0'){msj.push("Seleccione una opccion valida "+e['select']);}else{msj.push("Campo requerido");}
        }
        if(e['positive_value']!=null && e['positive_value']=='true' && parseInt(val)<0){
			
            inp_valid=false;
            msj.push("valor no puede ser negativo");
        }

        if(hasClass(id,'auto-validate-msj')){
           
           
            msj_aux='';
            if(msj.length>0){
                msj.forEach(e => {
                    msj_aux+='# '+e+'<br>';
                });
                //innerHtml('msj-'+id,msj_aux);
                innerHtml('msj-'+id,'Por favor, Seleccione una opción valida.');

                removeClass(id,'invalid');addClass(id,'is-invalid');
            }else{
                removeClass(id,'is-invalid');addClass(id,'is-valid');
            }
            
        }
        
    });
    
    
    return {'valid':inp_valid,'msj':msj};
}


    // ************************//
    //                         //
    // GET VAL INPUT OR SELECT //
    //                         //
    //*************************//
function Val(id,val=false){
    if(val==false){
        return document.getElementById(id).value;
    }else{
        document.getElementById(id).value=val;
    }
}

    // ************************//
    //                         //
    //innerHtml GET AND SET    //
    //                         //
    //*************************//

function innerHtml(id,content=false){
    v=document.querySelector("#"+id);
    if(content==false){return v.innerHTML}else{return v.innerHTML=content}
}

// para saber si un elemento tiene una clase determinada.

function hasClass(id,c){
    var list_class=document.getElementById(id).classList.contains(c);
    return list_class;   
}

function addClass(id,c){
    document.getElementById(id).classList.add(c);
}

function removeClass(id,c){
    document.getElementById(id).classList.remove(c);
}

function toggleClass(id,c,i=false){
    document.getElementById(id).classList.toggle(c);   
}

function css(id,clave,valor){
    if(clave=='display'){
        document.getElementById(id).style.display=valor;
    }
}

function input_format(id,format,chater=' '){
    e=document.getElementById(id).value;
    e=e.split(chater);
 
    switch(format){
        case 'C': e.forEach(P=> {
                    var a_e='',i=0;
                    P.forEach(L => {
                        i++
                        if(i==0){
                            a_e+=l_format(L,'MA');
                        }else{
                            a_e+=l_format(L,'MI');
                        }
                    });

                  });
        break;
    }
    
}

function l_format(letra,format){
  
    if(format=='MA' || format=='ma'){
        if(a_mi.indexOf(letra)=='-1' && a_ma.indexOf(letra)!='-1'){
            
            return letra;
        }else{
            
            if(a_mi.indexOf(letra)!='-1'){
              
                return (a_ma[a_mi.indexOf(letra)]);
            }else{
                
                if(a_nu.indexOf(letra)!='-1'){
                    return letra;
                }else{
                    return '';
                }
            }
        }

    }else if(format=='MI' || format=='mi'){

        if(a_mi.indexOf(letra)!='-1' && a_ma.indexOf(letra)=='-1'){
            
            return letra;
        }else{
            
            if(a_ma.indexOf(letra)!='-1'){
              
                return (a_mi[a_ma.indexOf(letra)]);
            }else{
                
                if(a_nu.indexOf(letra)!='-1'){
                    return letra;
                }else{
                    return '';
                }
            }
        }
    
    }else{
        console.log('letter in l_format is not valid');
    }
   

}

