let sampleApp = {
  bindings: {},
  //templateUrl: require('./app.html'),
  template: ' kopet is sample <a ui-sref="home" ui-sref-active="active">Home</a>  <a ui-sref="samplePage" ui-sref-active="active">samplePage</a> ',
  controller: class appCtrl {
    constructor($scope, $state, appService, $timeout) {
      this.$state = $state;
      this.appService = appService;
    }
  }
}

sampleApp.$inject = ['$scope', '$state' ,'appService'];
export default sampleApp;
