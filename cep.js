// https://viacep.com.br/

// jQuery Wrapper

jQuery(function(){
    
    // ações

/*     var onlyNumbers = function(e){  // a função recebe um evento, por isso colocamos a letra "e"
        //console.log(e.target.value);
        //console.log(this.value);
        //console.log(this.value.replace(/\D/g, "")); // https://regex101.com/
        this.value=this.value.replace(/\D/g, "");
        
    } // arrow function não funciona com THIS, dai teria que trocar por e.target.value no lugar de this.value */

    var onlyNumbers = e => e.target.value = e.target.value.replace(/\D/g, ""); // o "g" significa global, então ele pega todos

    var validateCep = function(e){
        var cep = this.value;
        if(cep.length != 8) {
            $(this).addClass("error").focus();
        } else {
            $(this).removeClass("error");
            getAdress(cep);
        }
        
        if (cep.length === 0) {
            $("input").val("");
        }
    }
    

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

    // eventos

    $("#cep") // peguei o campo de CEP
    .on("input", onlyNumbers) // entrada dos números
    .on("focusout", validateCep) // apertar o tab



}); // jQuery() = ao carregar a página, carregar o jQuery