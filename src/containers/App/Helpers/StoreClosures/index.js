import CheckIfUpcomingEvents from 'containers/Bumper/Helpers/CheckIfUpcomingEvents'

var masterTimeObj = {
  closed: "03/23/2020-05/15/2020",
  adjustedHours: "03/25/2020/10-5,03/26/2020/10-5"
}

export default function(){
return CheckIfUpcomingEvents(masterTimeObj['closed'])
}
