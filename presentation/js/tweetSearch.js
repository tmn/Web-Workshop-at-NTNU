/**
* Fetching tweets from search
* @author tmn
*/
var tweetSearch = function(str) {
	this.url = 'http://search.twitter.com/search.json?callback=?&q=';
	this.query = str.replace('#', '%23');
	
	this.tweets = new Array();
	
	this.getTweets = function(callback) {
		$.getJSON(this.url + this.query, function(json) {
			$.each(json.results, function(i, twitter) {
				
				var tweet = (twitter.text).replace(/https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*([-_]*[A-Za-z]*.[A-Za-z]*\/?)?(\?\S+)?)?)?/g, '<a href="http://$1$3">$1$3</a>');
				tweet = tweet.replace(/([@]\w*)/g, '<a href="http://twitter.com/$1">$1</a>');
				var tweetImage = twitter.profile_image_url;
				
				$('#tweetList').append('<p>'+i+'<img src="'+tweetImage+'" alt=""><span> - '+tweet+'</span></p>');
				
				this.tweets[i] = new Array();
				
				
			});
		});
		
		if (typeof callback == 'function') {
			callback.call(this);
		}
		
		return this.tweets;
	}
}
