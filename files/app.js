var animated = false;
document.querySelector('.email').addEventListener('click', function(e){ 
	if(animated) return;
	var el = document.querySelector('.email-brian');
	el.style.display = 'inline-block';
    Velocity(el, { duration: 2000, 'margin-right': '0', opacity:1 });
	animated = true;
});