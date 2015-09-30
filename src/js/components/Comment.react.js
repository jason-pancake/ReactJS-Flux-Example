var React         = require('react');
var RedditActions = require('../actions/RedditActions');

var Comment = React.createClass({
    render: function() {
        return (
            <div>
                <strong>{this.props.comment.name} ({this.props.comment.email})</strong>
                <p>
                    {this.props.comment.body}
                </p>
                <hr />
            </div>
        );
    },
});

module.exports = Comment;