var React = require('react');
var Post  = require('./Post.react');

var Posts = React.createClass({
    render: function() {
        var posts = [];

        for(key in this.props.posts) {
            var post = this.props.posts[key];
            posts.push(<Post key={post.id} postId={post.id} title={post.title} body={post.body} />);
        }

        return (
            <div>
                {posts}
            </div>
        );
    }
});

module.exports = Posts;