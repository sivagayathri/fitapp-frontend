import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {
  IPayPalConfig,
  ICreateOrderRequest 
} from 'ngx-paypal';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit{
  public payPalConfig ? : IPayPalConfig;
  traineer:any
  showSuccess:boolean=false
  showCancel:boolean=false
  showError:boolean=false
  cartTotalPrice:number=0
  offerStatus:boolean=false
  finalAmount:number=0
  offerTagStatus:boolean = true
  
  paymentBtn:boolean=false
  makepaymentStatus:boolean=false
   user:any=[]
  addressForm = this.fb.group({
    username:[''],
    addr1:[''],
    addr2:[''],
    state:['']

  })
constructor(private api:ApiService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.initConfig();
this.trainer();

  }

  //view offer
  viewOffers(){
        this.offerStatus = true
  }
 //discount10()
 discount10(){
  let discount = this.cartTotalPrice*10/100
  this.finalAmount = this.cartTotalPrice - discount
  this.offerStatus=false
   this.offerTagStatus=false
 }
 //discount50()
 discount50(){
  let discount = this.cartTotalPrice*50/100
  this.finalAmount = this.cartTotalPrice - discount
  this.offerStatus=false
   this.offerTagStatus=false
 }

 //submit(){
  submit(){
  if(this.addressForm.valid){
    this.paymentBtn = true
    this.user.username = this.addressForm.value.username
    this.user.addr1 = this.addressForm.value.addr1
    this.user.addr2 = this.addressForm.value.addr2
    this.user.state = this.addressForm.value.state

  }
  else{
alert('Invalid Form')
  }
}

//make payment status
makepayment(){
  this.makepaymentStatus=true
}

//paypal function
private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: 'sb',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: '9.99',
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: '9.99'
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: '9.99',
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details:any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            this.showSuccess = true;
           // alert('Payment Successfully completed...Your order is confirmed!!!')
            //empty cart
            
            this.makepaymentStatus=false
            this.paymentBtn=false
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            this.showCancel = true;
            this.makepaymentStatus=false
          },
        onError: err => {
            console.log('OnError', err);
            this.showError = true;
            this.makepaymentStatus=false
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
            //this.resetStatus();
        }
    };
}

//modelClose()
modalClose(){
  this.addressForm.reset()
  this.paymentBtn = false
  this.makepaymentStatus= false
  this.showCancel=false
  this.showSuccess = false
  this.showError=false
}



trainer(){
  this.api.trainer().subscribe((result:any)=>{
    console.log(result);
    this.traineer=result
  })
}
}
