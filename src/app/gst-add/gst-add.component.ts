import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  addBusiness(person_name, email, password) {
    this.bs.addBusiness(person_name, email, password);
  }

  ngOnInit() {
  }

}