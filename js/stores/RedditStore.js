/*
 * RedditStore
 */

var EventEmitter    = require('events').EventEmitter;
var assign          = require('object-assign');
var RedditConstants = require('../constants/RedditConstants');
var AppDispatcher   = require('../dispatcher/AppDispatcher');

var CHANGE_EVENT = 'change';

var _data = {
    posts: [],
    comments: [],
};

var RedditStore = assign({}, EventEmitter.prototype, {

    updatePosts: function(posts) {
        _data.posts = posts;
    },

    updateComments: function(comments) {
        _data.comments = comments;
    },

    /**
     * Get the current state of the store data.
     * @return {object}
     */
    get: function() {
        return _data;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case RedditConstants.LOAD_POSTS:
            var posts = action.posts;
            RedditStore.updatePosts(posts);
            RedditStore.emitChange();
            break;
        case RedditConstants.LOAD_COMMENTS:
            var comments = action.comments;
            RedditStore.updateComments(comments);
            RedditStore.emitChange();
            break;
        default:
            break;
    }
});

module.exports = RedditStore;