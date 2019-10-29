$( document ).ready(function() {
	initFirstModalForm();
   
   $( ".btn-next" ).click(function(event) {
	   if (!validate(".required-sp")) initSecondModalForm();
	 });
   
   $( ".btn-cancel, .close, .btn-back" ).click(function() {
	   initFirstModalForm();
	 });
   
   $( ".btn-add-api" ).click(function() {	
	   if (!validate(".required-ws")) {
			var contractUrl = $("#apiSpecUrl").val();
			
		    $.get( "/ws/validate?contractUrl=" + contractUrl, function( data ) {
		   	   var schemaValidationMessages = data.schemaValidationMessages;
		       if (schemaValidationMessages != null) {
		      	   var error = schemaValidationMessages.find((element) => {
		       		  return element.level == "error";
		       		});
		      	   $(".api-spec-error").text(error.message).show(); 
		      	   validationError = true;
		       } else {
		    	   $(".api-spec-error").text("").hide(); 
		    	   $( ".add-api-form" ).submit();
		       }
			  });
	   }
	 });
   
   $( ".btn-search" ).click(function() {
	   $( ".search-api-form" ).submit();
	 });
});

function validate(validationClass) {
	   var validationError = false;
	   $(validationClass).each(function(i, obj) {
		   if (!$(this).val()) {
			   $(this).addClass("red-border");
			   validationError = true;
		   } else {
			   $(this).addClass("bootstrap-border");
		   }
	   });
	   return validationError;
}

function initFirstModalForm() {
	   $(".web-service-form").hide();
	   $(".btn-add-api").hide();
	   $(".btn-back").hide();
	   $(".modal-title").text("Service provider information");
	   
	   $(".service-provider-form").show();
	   $(".btn-next").show();
	 }

function initSecondModalForm() {
	   $(".service-provider-form").hide();
	   $(".btn-next").hide();
	   
	   $(".web-service-form").show();
	   $(".btn-add-api").show();
	   $(".btn-back").show();
	   $(".modal-title").text("Web API information");
	 }