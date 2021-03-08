const name = document.getElementById('name');
const email = document.getElementById('email');
const category = document.getElementById('category');
const radio = document.getElementsByName("position");
const information = document.getElementById('information');

function validate() {
    //validar nome
    if (name.value == "") {
        alert("Nome nao informado")
        name.focus()
        return false
    }

    //validar email
    if (email.value == "") {
        alert("Email nao informado");
        email.focus();
        return false
    }

    //validar radio
    var position = false;
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            position = true;
        }
    }
    if (!position) {
        alert("Selecione a posição");
        radio[0].focus();
        return false;
    }

    //validar select
    if (category.selectedIndex == 0) {
            alert("Selecione a categoria");
            category.focus();
            return false
        }
        
}

