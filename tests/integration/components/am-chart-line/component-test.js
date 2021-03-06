import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('am-chart-line', 'Integration | Component | am chart line', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{am-chart-line}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#am-chart-line}}
      template block text
    {{/am-chart-line}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
