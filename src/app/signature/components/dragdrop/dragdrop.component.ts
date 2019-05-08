import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileSystemDirectoryEntry, FileSystemFileEntry, UploadEvent, UploadFile } from 'ngx-file-drop';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent implements OnInit {
  public files: UploadFile[] = [];
  @Output() fileDroped: EventEmitter<File> = new EventEmitter<File>();

  ngOnInit(): void {
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    console.log('Files drom drop', this.files);
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.fileDroped.emit(file);
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log('Concrete file 2', fileEntry);
      }
    }
  }

  public fileOver(event) {
  }
  public fileLeave(event) {
  }

}
