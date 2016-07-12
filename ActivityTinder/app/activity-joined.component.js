(function(app) {
  // Create function to attach everything to and pass any injected service.
  function ActivityComponent(dataService) {
    // Invoke service and save to components name space
    this.name = dataService.getActivity();
    // Had activities in a datasService Prototype for development
    this.activities = dataService.getJoinedActivities();
  }
  // Declare components injectables
  ActivityComponent.parameters = [
    app.DataService
  ];
  // Create new DOM Space for Component
  ActivityComponent.annotations = [
    // create new component
    new ng.core.Component({
      // create selector for html
      selector: 'joined-activities',
      // create template for DOM
      template: 
      `
      <h1>Activity: {{name}}</h1>
      <div>
        <h1>Joined Events!</h1>
        <div id="activityList">
          <div class="activity" *ngFor="let activity of activities">
            <h3>{{activity.eventName}}</h3>
            <img id="activityPicture" [src]="activity.eventPhoto" width="200">
            <p>Date: {{activity.eventDate}}</p>
            <p>Time: {{activity.eventTime}}</p>
            <p>Creator: {{activity.eventCreator}}</p>
          </div>
        </div>
      </div>
      `
    })
  ];

  // Name and link component
  app.ActivityJoinedComponent = ActivityComponent;

})(window.app = window.app || {});


// <ul>
//   <li *ngFor="let activity of activity; let i = index">{{activity.eventName}}</li>
// </ul>
