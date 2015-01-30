// initialise the helper object with the code, secret code and the
// generic helper
var helper = new CBHelper("zypper-landing-page", "5e313b752f970c957931b916fb03f87e", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("haowu123"));

jQuery(document).ready(function($) {

  $('.email_header_submit').on("click", function(){
    var email = $('.email_header').val()
    insertEmail(email)
  });

  $('.email_footer_submit').on("click", function(){
    var email = $('.email_footer').val()
    insertEmail(email)
  });

});

function insertEmail(email) {
  if (email) {
    var dataObject = { "email" : email };
    helper.insertDocument("emails", dataObject, null, function(resp) {
      if (resp["outputData"] == "Inserted") {
        alert("Thank you for registering!")
      }
    });
  }
}