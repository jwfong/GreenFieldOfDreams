(function(app) {
  var HeroComponent = ng.core.Component({
    selector: 'hero-di-inline',
    template: '<h1>Hero: {{name}}</h1>'
  })
  .Class({
    constructor:
      [app.DataService, 
       function(service) {
         this.name = service.getHeroName();
       }]
  });
  app.HeroDIInlineComponent = HeroComponent;
})(window.app = window.app || {});


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/