import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() draft: string = ""
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }
  delete(note: string) {
      if(confirm("¿Eliminar esta nota?")) {
      }
    }
}
