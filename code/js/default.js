window.onload = function() {
	
	$('img').click(function() {
		alert("meh")
	});
	
	
	$('#tweetSearch').keypress(function(e) {
		if (e.which == 13) {
			$('#tweetList').append('<p>Your search: ' + $('#tweetSearch').val()+'</p>');
			
			var test = new tweetSearch($('#tweetSearch').val());
			$('#tweetList').append("meh: ");
			var oh = test.getTweets(function() {
				alert(this.tweets.length)
			});
			
		}
		
	});
	
	
}

