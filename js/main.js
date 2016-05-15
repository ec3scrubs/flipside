$(document).ready(function(){
  $("#query-search-form").bind('submit', function (e) {
    formData = $('#searchTerm').val();
    console.log(formData);
    jQuery.ajax({
      type: "POST",
      url: "url",
      dataType: "json",
      data: {'param': formData},
      success: function (result) {
        console.log(result);
      }
    });
    e.preventDefault();
    return false;
  });
});
