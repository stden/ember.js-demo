import Ember from 'ember';
import {module, test} from 'qunit';
import startApp from 'emberjs-sandbox/tests/helpers/start-app';

let application;

module('Acceptance: WelcomePage', {
  beforeEach: function () {
    application = startApp();
  },

  afterEach: function () {
    Ember.run(application, 'destroy');
  }
});

test('we should be welcoming', function (assert) {
  visit('/');

  andThen(function () {
    assert.equal(currentURL(), '/');
    const title = find('#title');
    assert.equal(title.text(), 'Congratulations, you made it!');
  });
});
