import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { FileService } from '../../services/fileService/fileService';

@Component({
  moduleId: module.id,
  selector: 'testfile',
  templateUrl: "testFile.component.html"
})

export class TestFileComponent { 
  files;


  constructor(private router: Router, private testFileService: FileService){
    
  }

  updateFiles(event) {
    let files = event.srcElement.files;
    console.log(files);
    this.testFileService.makeFileRequest('http://localhost:8100/test', [], files).subscribe(
      res => {
        console.log('sent');
        console.log(res);
      }
    );
  }

  testFileSumbit() {

  }

  
}

