const soap= require('soap');
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient(url,function(err,resultado){
    console.log('Descreve -->',resultado.describe().AtendeClienteService.AtendeClientePort);
    /*resultado.consultaCEP({cep:'94475670'}, function(err, resultado){
        if(err){
            console.log(err);
        }else{
            console.log('O CEP é: '+resultado);
        }
    });*/

});