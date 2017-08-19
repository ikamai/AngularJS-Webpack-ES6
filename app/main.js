/*
  Import Dependencies
*/
import angular        from 'angular';
import uiRouter       from 'angular-ui-router';
import ngSanitize     from 'angular-sanitize';


import '../dev/css/rizoa.css';

/*
  components
*/
import initComponent    from './components/init.component';
import homeComponent    from './components/home.component';
import sampleComponent  from './components/samplepage.component';

/*
  services
*/
import appService from './services/app.service';

/*
  routing
*/
import router from './router/index.router';

/*
  directives
*/

// constants
const JENENGAPP = 'rootpixel';
require('../dev/index.html');
angular.module(JENENGAPP, [uiRouter, ngSanitize])

  .component('rootpixelJogja', initComponent)
  .component('home', homeComponent)
  .component('samplePage', sampleComponent)

  .service('appService', appService)

  .config(router)

export default JENENGAPP;
