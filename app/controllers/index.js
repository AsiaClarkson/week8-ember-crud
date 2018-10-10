import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        deletePost(post){
            let confirmed = window.confirm('This post will be gone forever. Are you sure?');
            if(confirmed){
            post.destroyRecord();
            }
        }
    }
});
