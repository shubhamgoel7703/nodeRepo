getHotelDetail = function(id){
  $('#attribute-list-'+id).slideToggle();
}
getTotalTax = function(id){
  $('#'+id).slideToggle();
}
getTotalFees = function(id){
  $('#'+id).slideToggle();
}
getDetails = function(id){
  $('#type-details-'+id).slideToggle();
  var change = document.getElementById('viewRates'+id);
  if (change.innerHTML=="Make Selection") change.innerHTML = "Make Selection";
   else {
     change.innerHTML = "Make Selection";
     $('#attribute-list-'+id).hide();
   }
}
