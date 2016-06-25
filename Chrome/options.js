function show_status_message(message) {
	// Update status to let user know options were saved.
	var status = document.getElementById('status');
	status.textContent = message;
	setTimeout(function() { status.textContent = ''; }, 750);
}

function save_options() {
	var chosen_options = {
		hide_favorites: document.getElementById('hide_favorites').checked,
		hide_follows: document.getElementById('hide_follows').checked,
		hide_retweets: document.getElementById('hide_retweets').checked
	};
	chrome.storage.sync.set(chosen_options, function() {
		show_status_message("Options saved");
	});
}

// Restore previously saved options from chrome.storage.sync.
function restore_options() {
	var default_options = {
		hide_favorites: true,
		hide_follows: true,
		hide_retweets: true
	};
	chrome.storage.sync.get(default_options, function(restored_options) {
		document.getElementById('hide_favorites').checked = restored_options.hide_favorites;
		document.getElementById('hide_follows').checked = restored_options.hide_follows;
		document.getElementById('hide_retweets').checked = restored_options.hide_retweets;
	});
}

// Add event handlers for saving and restoring.
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
