import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDate', (date, dateFormat = 'LL') => {
  if (!date) {
    return 'No date input';
  }
  return moment(date).format(dateFormat);
});