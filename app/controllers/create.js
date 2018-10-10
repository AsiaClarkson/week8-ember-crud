import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPost(event) {
      event.preventDefault();
      //read out the inputs
      console.log(this.title, this.body);
      //save post model
      let post = this.store.createRecord('post', {
        title: this.title,
        body: this.body
      });
      post.save().then(() =>{
          this.transitionToRoute('post', post.id);
      });
    }
  }
});
