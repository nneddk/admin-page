const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('sidebar-close');
closeBtn.onclick = function(){
   sidebar.style.height = 0;
   sidebar.style.width = 0;
}
const openBtn = document.getElementById('sidebar-open');
openBtn.onclick = function(){
   sidebar.style.height = '50%';
   sidebar.style.width = '18%';
}