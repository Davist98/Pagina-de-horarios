function carregar() {
var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()


msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //BOM DIA
       imagem.src = 'manhã.png'
       document.body.style.background = '#5f9681'
}
else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    imagem.src = 'tarde.png'
    document.body.style.background = '#ee9f5d'
}
else {
    //BOA NOITE 
    imagem.src = 'noite.png'
    document.body.style.background = '#02254d'

}
}