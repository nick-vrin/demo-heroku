module.exports = {
  test: function (data) {
	const phantom = require('phantom');
	console.log(phantom);
	var page = phantom.create();
	//console.log(page);
	page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
    page.evaluate(function() {
      console.log("$");
    });
    phantom.exit()});
	//console.log($);
	var uri_enc = encodeURIComponent(data);
    console.log(uri_enc);
  },
  bar: function () {
    // whatever
  }
};