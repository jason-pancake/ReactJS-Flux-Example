var React = require('react');
var Comment  = require('./Comment.react');

var Comments = React.createClass({
    render: function() {
        var comments = [];

        for(key in this.props.comments) {
            var comment = this.props.comments[key];
            comments.push(<Comment key={comment.id} comment={comment} />);
        }

        return (
            <div>
                {comments}
            </div>
        );
    }
});

module.exports = Comments;