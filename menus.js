const menu = (day) => {
  switch (day.toLowerCase()) {
    case "monday":
      return "Monday Menu: Butter chicken, Salad";
    case "tuesday":
      return "Tuesday Menu: Panipuri, Chiken masala ";
    case "wednesday":
      return "Wednesday Menu: Special veg mix, Butter roti";
    case "thursday":
      return "Thursday Menu: Butter Paneer, salad";
    case "friday":
      return "Friday Menu: chiken 65, veg noodles";
    case "saturday":
      return "Saturday Menu: Burger, Fries";
    case "sunday":
      return "Sunday Menu: Pizza, Salad";
    default:
      return "Invalid input";
  }
};

console.log(menu("Friday"));
console.log(menu("sunday"));
console.log(menu("tuesday"));
