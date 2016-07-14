(function(app) {
  app.ActivityCreateComponent = ng.core
    .Component({
      selector: 'createActivity',
      templateUrl: 'app/activity-form.html'
    })
    .Class({
      constructor: function() {

        this.model = new app.Activity();
        console.log(this.model);
      },
      onSubmit: function(newActivity) {
        //add functionality to add facebook username as initiator to newActivity.initiator
        console.log(newActivity);
        this.model = new app.Activity();
      }
    });
})(window.app || (window.app = {}));
