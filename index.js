// Distance from HQ in blocks
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;  
    return Math.abs(pickupLocation - hqLocation);  
  }
  
  console.log(distanceFromHqInBlocks(50));  
  
  // Distance from HQ in feet
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);  
    return blocks * 264;  
  }
  
  console.log(distanceFromHqInFeet(34));  
  
  // Distance travelled in feet
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start); 
    return blocksTravelled * 264;  
  }
  
  console.log(distanceTravelledInFeet(34, 38)); 
  
  // Fare price calculation
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0;  
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;  
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;  
    } else {
      return 'cannot travel that far';  
    }
  }
  
  console.log(calculatesFarePrice(34, 38));  