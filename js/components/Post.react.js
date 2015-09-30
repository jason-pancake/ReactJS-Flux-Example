var React         = require('react');
var RedditActions = require('../actions/RedditActions');

var Post = React.createClass({
    render: function() {
        return (
            <div>
                <strong>{this.props.title}</strong>
                <p>
                    {this.props.body}
                </p>
                <button className="btn btn-info" onClick={this._handleClick}>Load Comments</button>
                <hr />
            </div>
        );
    },

    _handleClick: function() {
        RedditActions.loadComments(this.props.postId);
    }
});

module.exports = Post;