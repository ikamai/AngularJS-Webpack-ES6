let thisApp = {
  bindings: {},
  //templateUrl: require('./app.html'),
  template: '  <div ui-view></div>',
  controller: class appCtrl {
    constructor($scope, $state, appService, $timeout) {
      this.$state = $state;
      this.appService = appService;
    }
  }
}

thisApp.$inject = ['$scope', '$state' ,'appService'];
export default thisApp;
