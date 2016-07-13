(function(app) {

  function DataService() {}
  DataService.annotations = [
    new ng.core.Injectable()
  ];
  DataService.prototype.getActivity = function() {
    return 'running';
  };
  DataService.prototype.getJoinedActivities = function(cb) {
  	firebase.database().ref('activities').once('value').then(function(snapshot) {
      console.log(snapshot.val());
  		cb(snapshot.val());
   });
  };

  app.DataService = DataService;

})(window.app = window.app || {});
