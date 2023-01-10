let drop = document.getElementById('dropdown');
let list = document.getElementById('language-list');
let x = 0;
drop.addEventListener('click',function(){
        if(x == 0){
          list.style.display = 'block';
          x = 1;
        }else if(x == 1){
          list.style.display = 'none';
          x = 0;
        }
})