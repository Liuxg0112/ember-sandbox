import Controller from 'ember-controller';
import set from 'ember-metal/set';

export default Controller.extend({
  actions: {
    selectUser(user) {
      set(this, 'selectedUser', user);
    },

    clearUser() {
      set(this, 'selectedUser', null);
    }
  }
});
