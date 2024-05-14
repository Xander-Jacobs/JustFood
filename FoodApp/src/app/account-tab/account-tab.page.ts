import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-tab',
  templateUrl: './account-tab.page.html',
  styleUrls: ['./account-tab.page.scss'],
})
export class AccountTabPage implements OnInit {
  orderItemsString: string = ''; 
  orderItems: any[] = []; 
  showModal: boolean = false;
  account: any = {};

  constructor(private modalController: ModalController,private router: Router) { 
    this.loadAccountData();
  }

  
    toggleconfirmModal() {
      this.modalController.dismiss();
      this.showModal = false;
  }

  confirmModal() {
      this.modalController.dismiss();
      this.saveAccountData();
      
  }

  confirmModalDelete() {
    this.modalController.dismiss();
    this.account = {};
    localStorage.removeItem('account');
    
}
  loadAccountData() {
    const accountData = localStorage.getItem('account');
    if (accountData) {
      this.account = JSON.parse(accountData);
    }
  }

  saveAccountData() {
    localStorage.setItem('account', JSON.stringify(this.account));
  }

  isAccountEmpty() {
    return Object.keys(this.account).length === 0;
  }


  


  toggleModalTrue() {
    this.showModal = true;
    console.log('Item clicked:', this.showModal);
  }

  toggleModalFalse() {
    this.showModal = false;
  }


  ReOrder(item: any) {
    console.log('Item clicked:', item);
    this.router.navigate(['/tabs/cart-tab'], { state: { item: item } });
  }

  clearOrders() {
    this.orderItems = [];
    localStorage.removeItem('orderItems');
  }

  getTotalPrice(cart: any[]): number {
    let total = 50;
  
    for (let item of cart) {
      total += item.price;
    }
  
    return total;
  }
  

  getTotalItems(cart: any[]): number {
    let total = 0;
  
    for (let item of cart) {
      total +=1;
    }
  
    return total;
  }
  
  ngOnInit() {
    this.orderItemsString = localStorage.getItem('orderItems') || '';
       this.orderItems = this.orderItemsString ? JSON.parse(this.orderItemsString) : [];
  }

}
