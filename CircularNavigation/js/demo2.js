(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    this.innerHTML = "Close";
	    openWrapper();
	  }
	  else{
	    this.innerHTML = "Menu";
		closeWrapper();
	  }
	  open = !open;
	}
	function openWrapper(){
		classie.add(wrapper, 'opened-nav');
	}

	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();