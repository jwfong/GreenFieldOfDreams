(function(app) {

  app.ActivityLoginComponent = ActivityComponent;

  function ActivityComponent(dataService) {
    this.name = dataService.getActivity();
  }
  ActivityComponent.parameters = [
    app.DataService
  ];
  ActivityComponent.annotations = [
    new ng.core.Component({
      selector: 'logging-in',
      template: `<fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
</fb:login-button>`

    })
  ];

})(window.app = window.app || {});
