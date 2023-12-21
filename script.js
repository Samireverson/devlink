function toggleMode(){
  const html = document.documentElement
  //mudar tema entre claro e escuro
  html.classList.toggle("light")

 //pegar tag img
 const img = document.querySelector("#profile img")

 //mudar imagem
  if(html.classList.contains('light')){
 //se for claro, troca imagem
 img.setAttribute("src", "./atrevidus_logo2.png")
} else {
    //se for escuro, manter a imagem original
    img.setAttribute("src", "./atrevidus_logo.png")
}
}




  
   // if(html.classList.contains('light')){
   //     html.classList.remove('light')
  //  } else {
       // html.classList.add('light')
   // } 
