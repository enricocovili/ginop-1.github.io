var image = document.querySelector('.github-logo')
var asd = document.querySelector('.subtitle')

function afterAnim() {
  image.classList.add('after-anim');
  asd.classList.add('after-anim');
  image.removeEventListener("animationend", afterAnim);
}

function typingEffect(element,speed){
  let text=element.innerHTML;
  element.innerHTML="";
  var i=-5;
    var timer=setInterval(function(){
      if(i<0) {
        i++;
      }
      if(i<text.length){
        element.append(text.charAt(i))
        i++;
      }else{
        clearInterval(timer);
      }
    },speed)
}


image.addEventListener("animationend", afterAnim)
image.addEventListener("mouseout", () => {
  image.classList.add('mouseOutGithub')
  image.removeEventListener("mouseout", () => {})
})

const h1=document.querySelector('h1');
typingEffect(h1,400);