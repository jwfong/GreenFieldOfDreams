(function(app) {
  app.Activity = Activity;

  function Activity(initiator, comments, joining, name, when, where) {
    this.initiator = initiator;
    this.comments = comments;
    this.joining = joining;
    this.name = name;
    this.when = when;
    this.where = where;
  }
})(window.app || (window.app = {}));
