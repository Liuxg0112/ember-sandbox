import Ember from 'ember';
import styles from 'sandbox/modules/index/styles';
export default Ember.Component.extend({
    tagName:'ul',
    classNames:['cell','-4of12'],
    localClassNames:'user-list',
    styles
}).reopenClass({
    positionalParams:['api']
});
