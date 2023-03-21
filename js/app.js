
const my_city = {
    name: "New York City",
    population: 8623000,
    is_capital: false
  };
  
 
  if (my_city.is_capital) {
    console.log(`${my_city.name} has a population of ${my_city.population}`);
  } else {
    console.log("Not important enough");
  }
  
  
  my_city.communities = ["Queens", "Brooklyn", "Manhattan", "Bronx", "Staten Island"];
  

  let i = 0;
  while (i < my_city.communities.length) {
    console.log(my_city.communities[i]);
    i++;
  }
  

  my_city.communities = [
    { name: "Queens", population: 2333054 },
    { name: "Brooklyn", population: 2648771 },
    { name: "Manhattan", population: 1643734 },
    { name: "Bronx", population: 1446788 },
    { name: "Staten Island", population: 479458 }
  ];
  
 
  let j = 0;
  while (j < my_city.communities.length) {
    if (my_city.communities[j].population >= 100) {
      console.log(my_city.communities[j].name);
    }
    j++;
  }
  
  
  let total_population = 0;
  let k = 0;
  while (k < my_city.communities.length) {
    total_population += my_city.communities[k].population;
    k++;
  }
  
 
  if (total_population === my_city.population) {
    console.log("The math checks out");
  } else {
    console.log("We must be missing some people");
  }
  