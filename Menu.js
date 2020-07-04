const menu={
  _courses:{
    appetizers:[],
    mains:[],
    desserts:[]
  },
  get appetizers(){
    return this._courses.appetizers
  },
  set appetizers(appetizers){
    this._courses.appetizers=appetizers
  },
  get mains(){
    return this._courses.main
  },
  set mains(mains){
    this._courses.mains=mains 
  },
  get desserts(){
    return this._courses.desserts
  },
  set desserts(desserts){
    this._courses.desserts=desserts
  },
  get courses(){
    return{
      appetizers:this.appetizers,
      mains:this.mains,
      desserts:this.desserts
    }
  },
addDishToCourse(courseName,dishName,dishPrice){
  const dish={
    name:dishName,
    price:dishPrice,
  };
  return this._courses[courseName].push(dish);
},

getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomNumber = Math.floor(Math.random() * dishes.length);
    return dishes[randomNumber]
},
generateRandomMeal(){
  const appetizers=this.getRandomDishFromCourse("appetizers");
  const main=this.getRandomDishFromCourse("mains");
  const desserts=this.getRandomDishFromCourse("desserts");
  const precioTotal=appetizers.price + main.price +desserts.price;
  return `Tu entrada fue ${appetizers.name},el plato principal fue ${main.name} y el postre fue ${desserts.name},el precio de todo es ${precioTotal}`

  

}
}
menu.addDishToCourse("appetizers","bananas",300.00)
menu.addDishToCourse("appetizers","mani",80.00)
menu.addDishToCourse("appetizers","manzana",50.00)
menu.addDishToCourse("mains","ratattouile",350.00)
menu.addDishToCourse("mains","milanesa a la napolitana",300.00)
menu.addDishToCourse("mains","filet de merluza",250.00)
menu.addDishToCourse("desserts","flan",150.00)
menu.addDishToCourse("desserts","helado",100.00)
menu.addDishToCourse("desserts","panqueques",175.00)

console.log(menu.generateRandomMeal())
