const distances = [
    {
        start: "chennai",
        end: "viluppuram",
        distance: 166,
    },
    {
        start: "viluppuram",
        end: "trichy",
        distance: 165,
    },
    {
        start: "trichy",
        end: "madurai",
        distance: 138,
    },
{
        start: "madurai",
        end: "tirunelveli",
        distance: 171,
    },
    {
        start: "tirunelveli",
        end: "kanyakumari",
        distance: 85,
    },
    {
        start: "karur",
        end: "trichy",
        distance: 83,
    }
];
const routes = [
    {
        start: "chennai",
        end: "trichy",
        stops: ["chennai", "viluppuram", "trichy"],
    },
    {
        start: "chennai",
        end: "madurai",
        stops: ["chennai", "viluppuram", "trichy", "madurai"],
    },
{
        start: "trichy",
        end: "tirunelveli",
        stops: ["trichy", "madurai", "tirunelveli"],
    },
    {
        start: "karur",
        end: "madurai",
        stops: ["karur", "trichy", "madurai"],

    }
];

const getroute = (route,index) =>
{
  const travelData = route.stops.map((stop,index,arr) => 
  (distances.find((travel)=> 
  (stop === travel.start && arr[index+1] ===travel.end))||0).distance||0);
 
  return getDistance(travelData) ;
} 

const getDistance = (distance)=> distance.reduce((acc,currentValue)=> acc + currentValue , 0)

const getTotalDistance = (route) =>
  ({
  ...route ,
    total : getroute (route)
  });

const main = () => console.log(routes.map(getTotalDistance));
  
main();