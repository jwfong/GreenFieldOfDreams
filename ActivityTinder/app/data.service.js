(function(app) {

  function DataService() {}
  DataService.annotations = [
    new ng.core.Injectable()
  ];
  DataService.prototype.getActivity = function() {
    return 'running';
  };
  app.DataService = DataService;

})(window.app = window.app || {});
