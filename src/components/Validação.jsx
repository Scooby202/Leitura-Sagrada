function Validação () {

const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordInput2 = document.querySelector("#password2");
const codigoInput = document.querySelector("#codigo")


    //Verificar o e-mail

    if(emailInput) {
        if(emailInput.value === "" || !VerificarEmail(emailInput.value)) {
            alert("Por favor, insira o seu E-mail")
            return false;
        };

    };

    //Verificar a senha
    if(passwordInput) {
        if(!VerificarSenha(passwordInput.value, 8)) {
            alert("Senha tem menos de 8 digitos")
            return false;
        };

        // tem letra

        const temLetra = /[a-zA-Z]/.test(passwordInput.value);

        if (!temLetra) {
            alert("Senha precisa de pelo menos uma letra.")
            return false;
        }
    };

    
        //Verificar a codigo
    if(codigoInput) {
        if(!VerificarSenha(codigoInput.value, 6)) {
            alert("Codigo tem 6 digitos")
            return false;
        };
    };

    //Se todos estiverem preenchindo
    
        form.requestSubmit();
        return;

        function VerificarEmail (email) {
            //regex para validar
            const emailRegex = new RegExp(
                // exemplo@gmail.com
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

            );

            if(emailRegex.test(email)) {
                return true
            };
            return false;
        };
    
        function VerificarSenha(password, minDigitos) {
            if(password.length >= minDigitos) {
                return true;
            };
            
            return false;
            
        };

}

export default Validação