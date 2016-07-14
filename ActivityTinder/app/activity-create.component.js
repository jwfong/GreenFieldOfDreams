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
        //add functionality to add facebook username as initiator to newAcitity.initiator
        console.log(newActivity);
        this.model = new app.Activity();
        // we want to call the enterNewActivity here
      }
    });
})(window.app || (window.app = {}));
