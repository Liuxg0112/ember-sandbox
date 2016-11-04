import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['cell', '-8of12']
}).reopenClass({
    positionalParams: ['selectedUser']
});
