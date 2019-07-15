import { Component, OnInit } from '@angular/core';
import { Phys } from '../models/phys';
import { from } from 'rxjs';
import { PatternValidator } from '@angular/forms';
@Component({
  selector: 'physcomp',
  templateUrl: './physcomp.component.html',
  styleUrls: ['./physcomp.component.css']
})
export class PhyscompComponent {
errormsgl="";
errormsgm="";
errormsgf="";
errormsgt="";
errormsgc="";
errormsga1="";  
errormsga2="";
errormsgcit="";
errormsgst="";
errormsgzi="";
errormsgcel="";
errormsgot="";
errormsgem="";
errormsgfa="";
userList:Array<Phys>=[];
physobj:Phys=new Phys();

addUser()
{
  try{
  if(this.physobj.firstName=="")
    {
this.errormsgf="first name can't be empty";
    }
    if(this.physobj.lastName=="")
    {
this.errormsgl="last name can't be empty";
    }
    if(this.physobj.middleName=="")
    {
      this.errormsgm="middle name can't be empty";
    }
    if(this.physobj.title=="")
    {
      this.errormsgt="title can't be empty";
    }
    if(this.physobj.clinic=="")
    {
      this.errormsgc="clinic can't be empty";
    }
    if(this.physobj.addressLine1=="")
    {
      this.errormsga1="address line1 can't be empty";
    }
    if(this.physobj.addressLine2=="")
    {
      this.errormsga2="address line 2 can't be empty";
    }
    if(this.physobj.city=="")
    {
      this.errormsgcit="city can't be empty";
    }
    if(this.physobj.state=="")
    {
      this.errormsgst="state can't be empty";
    }
    if(this.physobj.zip=="")
    {
      this.errormsgzi="zip can't be empty";
    }
    if(this.physobj.cellPhone==""||this.physobj.cellPhone.length!=10 )
    {
      this.errormsgcel="Invalid!!Phone Number";
    }
    if(this.physobj.otherPhone==""||this.physobj.otherPhone.length!=10)
    {
      this.errormsgot="Other Phone Number is not Valid";
    }
    if(this.physobj.email=="")
    {
      this.errormsgem="Invalid Email";
    }
    if(this.physobj.fax=="")
    {
      this.errormsgfa="fax can't be empty"
    }
    this.userList.push(this.physobj);
    console.log(this.physobj);
   }

catch(error){
console.log("error")
}
}
}
