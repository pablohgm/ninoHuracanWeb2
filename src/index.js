import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {NinoHuracanWeb2} from 'nino-huracan-web-2';

@Component({
  selector: 'main'
})

@View({
  directives: [NinoHuracanWeb2],
  template: `
    <nino-huracan-web-2></nino-huracan-web-2>
  `
})

class Main {

}

bootstrap(Main);
