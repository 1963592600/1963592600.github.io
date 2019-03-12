(function(){
  let obj_1 =  document.querySelector('.item-1');
  let obj_2 =  document.querySelector('.item-2');
  let dropobj_1 = document.querySelector('.drop-1')
  let dropobj_2 = document.querySelector('.drop-2')
  dropobj_1.onmouseover  = function (){
     obj_1.style.display = 'block'; 
  }
  dropobj_2.onmouseover  = function (){
    obj_2.style.display = 'block'; 
 }

  dropobj_1.onmouseout  = function (){
    obj_1.style.display = 'none'; 
 }
 dropobj_2.onmouseout  = function (){
    obj_2.style.display = 'none'; 
 }
}())
