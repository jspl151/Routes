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
  },
 {
    start: "trichy",
    end: "chennai",
    stops: ["trichy", "viluppuram", "chennai"],
 },
  {
    start: "chennai",
    end: "tirunelveli",
    stops: ["chennai", "trichy", "tirunelveli"],
  }
];

const getTotalDistance = (data) => data.reduce((acc, currentValue) => acc + currentValue, 0)

const findDistance = (route) => route.stops.map((stop, index, arr) =>
  (distances.find((distance) =>
  (stop === distance.start && arr[index + 1]
    === distance.end)||(stop === distance.end && arr[index + 1]
    === distance.start)) || 0).distance || 0);
  
const getFinalDistance = (route) =>

({
  start : route.start,
  end : route.end,
  total: getTotalDistance(findDistance(route))
});

const main = () => console.log(routes.map(getFinalDistance));


main();