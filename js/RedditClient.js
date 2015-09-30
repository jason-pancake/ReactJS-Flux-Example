var client = require('superagent');

var API_ENDPOINT = 'http://jsonplaceholder.typicode.com';

var RedditClient = {
    getCommentsByPostId: function(postId, callback) {
        var url     = API_ENDPOINT + '/comments/?postId=' + postId;
        var request = client.get(url);

        request.end(callback);
    },
    getPosts: function(callback) {
        var url     = API_ENDPOINT + '/posts';
        var request = client.get(url);

        request.end(callback);
    },
};

module.exports = RedditClient;