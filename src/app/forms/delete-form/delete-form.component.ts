import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DbService } from 'src/app/shared/db.service';
import { IStars, StarsImagesFirebaseService } from 'src/app/shared/firebase.service';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css', '../../../image-styles.css']
})
export class DeleteFormComponent implements OnInit {

  chekForSend: boolean = true;
  imgs: string[] = [];
  constructor(
    private fireBaseService: StarsImagesFirebaseService,
    private db:DbService
  ) { }

  ngOnInit(): void {

  }


  async checkHandler(form: NgForm) {

    // await this.fireBaseService.getStarsName(form.value.name, 'stars').then(x => this.imgs = x);

    this.db.getImagesByName(form.value.name).subscribe(data => this.imgs = (data as IStars[]).map(x=> x.path))
    

    this.chekForSend = false;
  }
 async submitHandler(form: NgForm) {
    // await this.fireBaseService.deleteStars(form.value.name)

    this.db.deleteManyImagesByName(form.value.name).subscribe();
  }
}
