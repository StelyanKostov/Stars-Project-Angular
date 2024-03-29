import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DbVideosService } from 'src/app/shared/db-videos.service';
import { DbService } from 'src/app/shared/db.service';
import { IStars, StarsImagesFirebaseService } from 'src/app/shared/firebase.service';


interface IData {
  name: string,
  path: string[]

}

@Component({
  selector: 'app-all-woman',
  templateUrl: './all-woman.component.html',
  styleUrls: ['./all-woman.component.css', '../../../image-styles.css']
})
export class AllWomanComponent implements OnInit {

  imgGirl = false;
  
  data: IData[] = [];

  data2: IStars[];
  dataVideos: IStars[];
  constructor(
    private db: DbService,
    private dbVideosService:DbVideosService
    ) {
    this.getData();
  }


  ngOnInit(): void {

    console.log(this.data.length === 0)
  }

  async getData() {

    this.data = [];

    // await this.db.getDataAll('stars').then(x => this.data2 = x)

   await this.db.getAllImages().toPromise().then(data => this.data2 = data as IStars[])

    this.data.push({ name: this.data2[0].name, path: [this.data2[0].path] })


    for (let index = 1; index < this.data2.length; index++) {

      for (let index2 = 0; index2 < this.data.length; index2++) {

        if (this.data[index2].name === this.data2[index].name) {
          this.data[index2].path.push(this.data2[index].path)
          break;
        }
        if (index2 === this.data.length - 1) {
          this.data.push({ name: this.data2[index].name, path: [this.data2[index].path] })
          break;
        }
      }
    }

  }

  showImgOnGirl(name: string) {
    this.data = this.data.filter(x => x.name === name)

    this.dbVideosService.getVideosByName(name).pipe(tap((data=> this.dataVideos = data as IStars[]))).subscribe()

    this.imgGirl = true;
    window.scroll(0, 0)
  }

  backHandler() {
    this.getData();
    this.imgGirl = false;
  }

}
