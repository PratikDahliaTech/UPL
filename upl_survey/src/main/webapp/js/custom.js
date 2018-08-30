$(document).ready(function() {
	//survey List Table init 
	$('#surveyListTable').DataTable({responsive: true});
	//user List Table init 
	$('#userListTable').DataTable({responsive: true});
	//init DateTimePickers
	materialKit.initFormExtendedDatetimepickers();
	//percentage sales on credit
	var percentage_sales_credit = document.getElementById('percentage_sales_credit');
	noUiSlider.create(percentage_sales_credit, {
		start: [0],
		step:1,
		connect: [true, false],
		tooltips: true,
		range: {
			'min': 0,
			'max': 100
		},
		format: {
		  to: function ( value ) {
			return value + '%';
		  },
		  from: function ( value ) {
			return value.replace(',-', '');
		  }
		},
	});
	
	//percentage sales on credit Kharif
	var percentage_sales_credit_kharif = document.getElementById('percentage_sales_credit_kharif');
	noUiSlider.create(percentage_sales_credit_kharif, {
		start: [0],
		step:1,
		connect: [true, false],
		tooltips: true,
		range: {
			'min': 0,
			'max': 100
		},
		format: {
		  to: function ( value ) {
			return value + '%';
		  },
		  from: function ( value ) {
			return value.replace(',-', '');
		  }
		},
	});
	//percentage sales on credit summer
	var percentage_sales_credit_summer = document.getElementById('percentage_sales_credit_summer');
	noUiSlider.create(percentage_sales_credit_summer, {
		start: [0],
		step:1,
		connect: [true, false],
		tooltips: true,
		range: {
			'min': 0,
			'max': 100
		},
		format: {
		  to: function ( value ) {
			return value + '%';
		  },
		  from: function ( value ) {
			return value.replace(',-', '');
		  }
		},
	});
	//percentage sales on credit rabi
	var percentage_sales_credit_rabi = document.getElementById('percentage_sales_credit_rabi');
	noUiSlider.create(percentage_sales_credit_rabi, {
		start: [0],
		step:1,
		connect: [true, false],
		tooltips: true,
		range: {
			'min': 0,
			'max': 100
		},
		format: {
		  to: function ( value ) {
			return value + '%';
		  },
		  from: function ( value ) {
			return value.replace(',-', '');
		  }
		},
	});
	//percentage sales season on Pesticides
	var percentage_sales_season_Pesticides = document.getElementById('percentage_sales_season_Pesticides');
	noUiSlider.create(percentage_sales_season_Pesticides, {
		start: [ 10, 20, 30],
		step:1,
		connect: [true, true, true, false],
		range: {
			'min': 0,
			'max': 100
		},
		tooltips: false,
		format: {
		  to: function ( value ) {
			return value + '';
		  },
		  from: function ( value ) {
			return value.replace(',-', '');
		  }
		}		
	});
		$('#slider_kharif_value').text('Kharif : '+ 10 + '%');
		$('#slider_rabi_value').text('Rabi  : '+ 20 + '%');
		$('#slider_summer_value').text('Summer  : '+ 30 + '%');

	percentage_sales_season_Pesticides.noUiSlider.on('end', function( values, handle ) {
		var kharifSeasonValue = parseInt(percentage_sales_season_Pesticides.noUiSlider.get()[0]);
		var rabiSeasonValue=parseInt(percentage_sales_season_Pesticides.noUiSlider.get()[1]);
		var summerSeasonValue=parseInt(percentage_sales_season_Pesticides.noUiSlider.get()[2]);
		$('#slider_kharif_value').text('Kharif : '+ kharifSeasonValue + '%');
		$('#slider_rabi_value').text('Rabi : '+ (rabiSeasonValue - kharifSeasonValue) + '%');
		$('#slider_summer_value').text('Summer  : '+ (summerSeasonValue - rabiSeasonValue) + '%');
	});

	$(".calender_year_picker").datetimepicker({
			viewMode: 'decades',
			format: 'YYYY',
		});
	$("#other_agri_product_checkbox").change(function() {
		if($(this).is(':checked')){
			$('#other_agricultural_products_input').show();
		}
		else{
			$('#other_agricultural_products_input').hide();
		}
		
	});
	//hide show section on basis of Q12 Yes No
	$('[name="business-owner"]').on('change', function(e) {
		if($('#not_business_owner_checkBox[type="radio"]').is(':checked')){
			$('#main_business_owner').show();
		}
		else{			
			$('#main_business_owner').hide();
		}
	});
	//toggle disable input box on basis section on Q16 if - other selected
	$('#designation_level').on('change', function() {
	  if(this.value == 'Others'){			
		$("#designation_level_other_name").prop( "disabled", false );
	  }
	  else{
		$("#designation_level_other_name").prop( "disabled", true );
		$("#designation_level_other_name").val("");
	  }
	});
	//toggle hide show input box on basis section on Q19A if - other selected
	$('[name="different-agricultural-seasons"]').on('change', function() {
		if($('#different_agricultural_seasons_Yes[type="radio"]').is(':checked')){			
			$("#depend_on_19A").show();
		}
	  else{
		$("#depend_on_19A").hide();
		$("#depend_on_19A input").val("");
	  }
	});
	//toggle disable Question on basis section on Q20 if - Yes selected
	$('[name="other-category-of-products"]').on('change', function() {
		if($('#other_category_of_products_Yes[type="radio"]').is(':checked')){			
			$('#category_handled tbody tr input').prop( "disabled", false );
		}
	  else{
		$('#category_handled tbody tr input').prop( "disabled", true );
		$("#category_handled tbody tr input").val("");
	  }
	});
	//Add new row to category handled table
	$('#category_handled tbody').on('focus','tr:nth-last-child(1) input', function(){
		totalnumber = $('#category_handled tbody tr').length + 1;			
		$('#category_handled tbody').append('<tr><td>'+ totalnumber +'</td><td><div class="has-default form-group"><input type="text" class="form-control" placeholder="Category Name"></div></td></tr>');
			
	});
	//toggle hide show input box on basis section on Q24 if - Yes selected
	$('[name="vehicle-for-delivery"]').on('change', function() {
		if($('#vehicle_for_delivery_Yes[type="radio"]').is(':checked')){			
			$("#vehicle_count").show();
		}
	  else{
		$("#vehicle_count").hide();
		$("#vehicle_count input").val("");
	  }
	});	
});

//Step Changing function
$("#progressbar li").on("click", function() {
  if(!$(this).hasClass('active')){
	goToStep($(this).index()+1);
  }
});
function goToStep(tagetStep){
	$('#progressbar li').removeClass('active');
	$('#progressbar li:nth-child('+tagetStep+')').addClass('active');
	$('div [id|="step"]').hide();
	$('#step-'+tagetStep+'').show();
	$('html,body').animate({
	scrollTop: $(".main.main-raised").offset().top - 100},
	'slow');
}