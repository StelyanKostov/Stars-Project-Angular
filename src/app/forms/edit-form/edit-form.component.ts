import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DbService } from 'src/app/shared/db.service';
import { StarsImagesFirebaseService, IStars } from 'src/app/shared/firebase.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css', '../../../image-styles.css']
})
export class EditFormComponent implements OnInit {

  img: string;
  form: FormGroup;
  dataImg: IStars;
  constructor(
    private formBuilder: FormBuilder,
    private fireBaseService: StarsImagesFirebaseService,
    private db:DbService
  ) {

    this.form = formBuilder.group({
      name: [],
      path: [],
      newName: [],
      newPath: []
    })
  }

  ngOnInit(): void {
  }


  async editFormSubmit() {

    let name = this.form.value.name;
    let path = this.form.get("path").value
    // await this.fireBaseService.getStarsByPathAndName(name, path).then(x => this.dataImg = x)
    let id = ""


   await this.db.getImageByPathAndName(name,path).toPromise().then(data => id = (data as IStars).id) 
    let newPath = this.form.value.newPath;
    let newName = this.form.value.newName;
    // this.fireBaseService.updateStar(id ,newPath , newName)

    this.db.updateStar(id,newName ,newPath).subscribe()
  }

   checkImg() {

    let path = this.form.get("path").value
    this.img = path

  }
}
