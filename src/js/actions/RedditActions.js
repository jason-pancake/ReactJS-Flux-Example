/*
 * RedditActions
 */

var AppDispatcher   = require('../dispatcher/AppDispatcher');
var RedditConstants = require('../constants/RedditConstants');
var Client          = require('../RedditClient');

var RedditActions = {
    loadComments: function(postId) {
        Client.getCommentsByPostId(postId, function(err, res) {
            AppDispatcher.dispatch({
                actionType: RedditConstants.LOAD_COMMENTS,
                comments: res.body
            });
        });
    },
    loadPosts: function() {
        Client.getPosts(function(err, res) {
            AppDispatcher.dispatch({
                actionType: RedditConstants.LOAD_POSTS,
                posts: res.body
            });
        });
    },
};

module.exports = RedditActions;