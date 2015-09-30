var React         = require('react');
var RedditActions = require('../actions/RedditActions');
var RedditStore   = require('../stores/RedditStore');
var Posts         = require('./Posts.react');
var Comments      = require('./Comments.react');

function getRedditState() {
    return RedditStore.get();
}

var SandboxApp = React.createClass({
    getInitialState: function() {
        return getRedditState();
    },

    componentDidMount: function() {
        RedditStore.addChangeListener(this._onChange);
        RedditActions.loadPosts();
    },

    componentWillUnmount: function() {
        RedditStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div className="row">
                <div className="col-lg-8">
                    <h2>Posts</h2>
                    <Posts posts={this.state.posts} />
                </div>
                <div className="col-lg-4">
                    <h2>Comments</h2>
                    <Comments comments={this.state.comments} />
                    <p className={this.state.comments.length == 0 ? 'alert alert-info' : 'hidden'}>
                        <span className="glyphicon glyphicon-info-sign"></span> I haven't loaded any comments yet.
                    </p>
                </div>
            </div>
        );
    },

    _onChange: function() {
        this.setState(getRedditState(), function() {
            console.log('State change:');
            console.log(this.state.posts);
        });
    }
});

module.exports = SandboxApp;