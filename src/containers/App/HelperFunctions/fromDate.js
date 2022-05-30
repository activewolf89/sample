import moment from 'moment';
export default function(timeString){

  return moment(timeString,'YYYYMMDD').fromNow()
}
