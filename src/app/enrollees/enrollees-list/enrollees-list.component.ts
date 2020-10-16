import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-enrollees-list',
  templateUrl: './enrollees-list.component.html',
  styleUrls: ['./enrollees-list.component.scss']
})
export class EnrolleesListComponent implements OnInit {

  users: Array<any> = [];
  openModal: boolean;
  userForm: FormGroup;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.openModal = false;
    this.createUserForm();
    this.getAllEnrollees();
  }

  getAllEnrollees(): void {
    this.dataService.getEnrollees().subscribe(
      (data: any) => {
        this.users = data;
      },
      (err: any) => {
        console.log('error occurred', err);
      });
  }

  onEdit(id: string): void {
    this.openModal = true;
    this.dataService.getEnrolleeById(id).subscribe(
      (data: any) => {
        this.patchUserDetails(data);
      },
      (err: any) => {
        console.log('error occurred', err);
      }
    );
  }

  createUserForm(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      status: new FormControl(true),
      dob: new FormControl('')
    });
  }

  patchUserDetails(data: any): void {
    if (data && data.id) {
      const patchUserFields: any = {
        id: data.id || '',
        name: data.name || '',
        status: data.active,
        dob: data.dateOfBirth || ''
      };
      this.userForm.setValue(patchUserFields);
    }
  }

  cancelEditing(): void {
    this.openModal = false;
  }

  saveEditing(): void {
    this.openModal = false;
    if (this.userForm && this.userForm.value) {
      this.dataService.updateEnrollee(this.userForm.value).subscribe(
        (response: any) => {
          const index = this.users.findIndex((ele) => ele.id === response.id);
          if (index !== -1){
            this.users[index] = response;
          }
        },
        (err: any) => {
          console.log('error occurred', err);
        }
      );
    }
  }
}
