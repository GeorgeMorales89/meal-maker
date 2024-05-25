let menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  addDishToCourse(courseName, dishName, dishPrice)  {
    if (!this.courses[courseName]) {
      return 'Invalid course name.';
    }
    let dish = {
      name: dishName,
      price: dishPrice,
    };
    this.courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    if (!this.courses[courseName] || this.courses[courseName].length === 0) {
      return 'No dishes available in this course.'
    }

    let dishes = this.courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;
    return 'Your meal is ' + appetizer.name + ', ' + main.name + ', ' + dessert.name + '. The total price is $' + totalPrice + '.';
  }
};

menu.addDishToCourse('appetizers', 'Caramelized French Onion Soup', 13.00);
menu.addDishToCourse('mains', 'Bone-in Dry Aged NY Strip', 41.00);
menu.addDishToCourse('desserts', 'Classic Créme Brûlée', 13.00);

let meal = menu.generateRandomMeal();

console.log(meal);
