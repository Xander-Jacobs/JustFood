import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-cart-tab',
  templateUrl: './cart-tab.page.html',
  styleUrls: ['./cart-tab.page.scss'],
})
export class CartTabPage implements OnInit {
isModalOpen = false;
cartItemsString: string = ''; 
cartItems: any[] = []; 
totalPrice: number = 0;
orderItems:any[]=[];
orderItemsString: string = ''; 

  constructor(private modalController: ModalController,private router: Router) { 

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getItem();
      }
    });

  }

  
  confirmModal() {
     this.modalController.dismiss();
  }

  getItem() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const item = navigation.extras.state['item'];
      console.log('Received item:', item);
      this.cartItems=item;
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      this.calculateTotalPrice();
    }
  }
  
  
    


  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0) + 50;
  }


  clearCart() {
    this.cartItems = [];
    localStorage.removeItem('cartItems');
    this.calculateTotalPrice();
  }
  

saveCart(){
  
  this.orderItems=[];
  let orderItemsString = localStorage.getItem('orderItems');
  // let cartItemsString = localStorage.getItem('cartItems');
  this.orderItems = orderItemsString ? JSON.parse(orderItemsString) : [];
  // this.cartItems=cartItemsString? JSON.parse(cartItemsString):[];
  this.getItem();
  this.orderItems.push(this.cartItems)
  localStorage.setItem('orderItems', JSON.stringify(this.orderItems));
  console.log('Item clicked:', this.orderItems);
  
}



  ngOnInit() {
       this.cartItemsString = localStorage.getItem('cartItems') || '';
       this.cartItems = this.cartItemsString ? JSON.parse(this.cartItemsString) : [];
       this.calculateTotalPrice();
  }

  
}
