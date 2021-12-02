function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('idade');
    var resultado = document.getElementById('resultado');
    if (formAno.value.length == 0 || Number(formAno.value) > ano){
        alert('[ERROR] Verifique os dados preenchidos e tente novamente!');
    } else {
        var formSex = document.getElementsByName('genero');
        var idade = ano - Number(formAno.value);
        var genero = '';
        var img = document.getElementById('foto');
        if (formSex[0].checked){
            genero = 'Masculino';
            if (idade >=0 && idade <12){
                img.src = './img/crianca_homem.png';
            } else if (idade <21){
                img.src = './img/jovem_homem.png';
            } else if (idade <50){
                img.src = './img/adulto_homem.png';
            } else {
                img.src = './img/idoso_homem.png';
            }
        } else if (formSex[1].checked){
            genero = 'Feminino';
            if (idade >=0 && idade <12){
                img.src = './img/crianca_mulher.png';
            } else if (idade <21){
                img.src = './img/jovem_mulher.png';
            } else if (idade <50){
                img.src = './img/adulto_mulher.png';
            } else {
                img.src = './img/idoso_mulher.png';
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}