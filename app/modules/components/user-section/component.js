import Ember from 'ember';

export default Ember.Component.extend({
    selectedUser:null,
    actions: {
        selectUser(user) {
            Ember.debug("{{user-section}}组件，执行selectUser方法。");
            this.set('selectedUser', user);
        },
        clearUser() {
            this.set('selectedUser', null);
        }
    }
});
