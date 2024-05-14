import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.page.html',
  styleUrls: ['./search-tab.page.scss'],
})
export class SearchTabPage implements OnInit {


  restaurants = [
    { 
      id: 1, 
      name: 'Burger Palace', 
      restaurantName:'Burger Bistro',
      dishType: 'Burger', 
      ratings: 4.5, 
      distance: '2', 
      price: 90, 
      image: 'assets/images/Burger.jpg' 
    },
    { 
      id: 2, 
      name: 'Pasta Heaven',
      restaurantName:'Del Forno',
      dishType: 'Pasta', 
      ratings: 4.0, 
      distance: '1.5', 
      price: 45, 
      image: 'assets/images/Pasta.jpg' 
    },
    { 
      id: 3, 
      name: 'Sushi Paradise', 
      restaurantName:'Fireroom',
      dishType: 'Sushi', 
      ratings: 4.8, 
      distance: '3', 
      price: 70, 
      image: 'assets/images/Sushi.jpg' 
    },
    { 
      id: 4, 
      name: 'Milkshake Delight', 
      restaurantName:'RocoMamas',
      dishType: 'Milkshake', 
      ratings: 4.2, 
      distance: '1', 
      price: 50, 
      image: 'assets/images/Milkshake.jpg' 
    }
  ];
  
  filteredRestaurants = this.restaurants;

  constructor() { }


  handleItemClick(item: any) {
    let cartItemsString = localStorage.getItem('cartItems');
    let cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log('Item clicked:', item);
    
  }

  handleInput(event: CustomEvent) {
    const query = (event.target as HTMLInputElement).value.toLowerCase().trim();
    if (query === '') {
      this.filteredRestaurants = this.restaurants;
      
    } else {
      
      this.filteredRestaurants = this.restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query) ||
        restaurant.restaurantName.toLowerCase().includes(query) ||
        restaurant.dishType.toLowerCase().includes(query)
      );
      console.log('Search query:', this.filteredRestaurants);
    }
  }




  ngOnInit() {
  }

}
