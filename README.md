### Consulta de CEP

Utilizando linguagem Javascript e a biblioteca jQuery, montei uma página para consulta de CEP.

A consulta é feita no site http://viacep.com.br/ onde pego os dados no formato json.

**Exemplo:**
https://viacep.com.br/ws/05001200/json/

<a href="https://imgur.com/Be265v9"><img src="https://i.imgur.com/Be265v9.png" title="source: imgur.com" /></a>

**Tela do programa:**

<a href="https://imgur.com/7HqEkzs"><img src="https://i.imgur.com/7HqEkzs.png" title="source: imgur.com" /></a>

Neste caso, o único campo que podemos preencher é o de CEP. Ao digitar um CEP válido, o programa preenche os campos Logradouro, Bairro, Cidade e Estado, de forma automática.

<a href="https://imgur.com/jerrkOl"><img src="https://i.imgur.com/jerrkOl.png" title="source: imgur.com" /></a>

Caso deixe o campo CEP em branco, o CSS entra em ação e deixa o campo em vermelho.

<a href="https://imgur.com/Fn86bGp"><img src="https://i.imgur.com/Fn86bGp.png" title="source: imgur.com" /></a>

Para um CEP inválido, chamo uma função mostrando um erro no console do navegador.

<a href="https://imgur.com/ZzuRbyd"><img src="https://i.imgur.com/ZzuRbyd.png" title="source: imgur.com" /></a>

Parte do código utilizado
```javascript
      var getAdress = function(cep){
            $.ajax({
                url: `https://viacep.com.br/ws/${cep}/json/`,
                dataType: "json",
                error: getAdressError,
                success: getAdressSuccess
            });
        }
        var getAdressError = function(){
            console.error(err);
        }
        var getAdressSuccess = function(endereco){
            console.log(endereco);
            $("#logradouro").val(endereco.logradouro);
            $("#bairro").val(endereco.bairro);
            $("#cidade").val(endereco.localidade);
            $("#estado").val(endereco.uf);
        }
```
