import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  adminDetails: any[] = [];
  adminToUpdate: any = {};

  // ✅ Function called when form is submitted
  register(form: any) {
    if (form.valid) {
      const newAdmin = {
        id: this.adminDetails.length + 1,
        name: form.value.name,
        email: form.value.email,
        phoneNumber: form.value.phoneNumber
      };
      this.adminDetails.push(newAdmin);
      form.reset(); // clear form after submit
    } else {
      alert('Please fill out all fields.');
    }
  }

  // ✅ Edit admin details
  edit(admin: any) {
    this.adminToUpdate = { ...admin };
  }

  // ✅ Update admin details
  updateAdmin() {
    const index = this.adminDetails.findIndex(a => a.id === this.adminToUpdate.id);
    if (index !== -1) {
      this.adminDetails[index] = { ...this.adminToUpdate };
      this.adminToUpdate = {};
      alert('Admin details updated successfully!');
    }
  }

  // ✅ Delete admin
  deleteAdmin(admin: any) {
    this.adminDetails = this.adminDetails.filter(a => a.id !== admin.id);
  }
}
