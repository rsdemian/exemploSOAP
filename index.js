const soap = require('soap');
const url ='http://www.dneonline.com/calculator.asmx?wsdl';


soap.createClient(url,function(err, client){
    //console.log('Descrever o WSDL',client.describe().Calculator.CalculatorSoap);

    //Function para somar
    client.Add({intA: 1, intB:2}, function(err,  result){
        if(err){
            console.log('Erro: '+err);
        }else{
            console.log('A soma é: '+ result.AddResult);
        }
    });

    //Function para dividir
    client.Divide({intA: 20, intB:2}, function(err,  result){
        if(err){
            console.log('Erro: '+err);
        }else{
            console.log('A Divisão é: '+ result.DivideResult);
        }
    });

    //Function para multiplicar
    client.Multiply({intA: 20, intB:2}, function(err,  result){
        if(err){
            console.log('Erro: '+err);
        }else{
            console.log('A Multiplicação é: '+ result.MultiplyResult);
        }
    });
});
