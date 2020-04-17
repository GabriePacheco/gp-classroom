document.addEventListener('DOMContentLoaded', (event) => {
	$("#app").height($(window).height());
	 var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
    const firebaseApp = firebase.app()

    $('#cameraBtn').click((e)=>{
    	console.log('laconc')
    	if(  $('#cameraBtn').attr('data-activo') == true){
    		$('#camaraBtn .material-icons').html('videocamera_off')
    		console.log($('#camaraBtn .material-icons').html())
    		$('#cameraBtn').attr('data-activo', false)
    	}else {
    		$('#camaraBtn i').html('videocamera')
    		$('#cameraBtn').attr('data-activo', true)
    		console.log($('#camaraBtn i').html())
    	}

    })

});