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
      template: `
      <div class="fb-login-button" data-max-rows="1" data-size="xlarge" data-show-faces="false" data-auto-logout-link="true" scope="email,public_profile,user_friends"></div>
      `
    })
  ];

})(window.app = window.app || {});



