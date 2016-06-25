(function(){

var default_options = {
	hide_favorites: true,
	hide_follows: true,
	hide_retweets: true
};
chrome.storage.sync.get(default_options, function(restored_options) {
	var body_classes = document.body.classList;
	if (restored_options.hide_favorites) { body_classes.add("noclutter-hide_favorites"); }
	if (restored_options.hide_follows) { body_classes.add("noclutter-hide_follows"); }
	if (restored_options.hide_retweets) { body_classes.add("noclutter-hide_retweets"); }
});

})();
