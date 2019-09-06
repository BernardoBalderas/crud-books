import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  bookForm: FormGroup;
  id: string = '';
  nombre: string = '';
  sexo: string = '';
  edad: string = '';
  estado_civil: string = '';
  escolaridad: string = '';
  ocupacion: string = '';
  domicilio: string = '';
  telefono: string = '';
  correo: string = '';
  apoyo_solicitado: string = '';
  fecha: string = '';
  lugar_trabajo: string = '';
  puesto: string = '';
  salario: string = '';
  otros_ingresos: string = '';
  total_ingresos: string = '';
  observaciones: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
    this.bookForm = this.formBuilder.group({
      'id': [null, Validators.required],
      'nombre': [null, Validators.required],
      'sexo': [null, Validators.required],
      'edad': [null, Validators.required],
      'estado_civil': [null, Validators.required],
      'escolaridad': [null, Validators.required],
      'ocupacion': [null, Validators.required],
      'domicilio': [null, Validators.required],
      'telefono': [null, Validators.required],
      'correo': [null, Validators.required],
      'apoyo_solicitado': [null, Validators.required],
      'fecha': [null, Validators.required],
      'lugar_trabajo': [null, Validators.required],
      'puesto': [null, Validators.required],
      'salario': [null, Validators.required],
      'otros_ingresos': [null, Validators.required],
      'total_ingresos': [null, Validators.required],
      'observaciones': [null, Validators.required]

    });
  }

  getBook(id) {
    this.api.getBook(id).subscribe(data => {
      this.id = data._id;
      this.bookForm.setValue({
        id: data.id,
        nombre: data.nombre,
        sexo: data.sexo,
        edad: data.edad,
        estado_civil: data.estado_civil,
        escolaridad: data.escolaridad,
        ocupacion : data.ocupacion,
        domicilio: data.domicilio,
        telefono: data.telefono,
        correo: data.correo,
        apoyo_solicitado: data.apoyo_solicitado,
        lugar_trabajo: data.lugar_trabajo,
        puesto: data.puesto,
        salario: data.salario,
        otros_ingresos: data.otros_ingresos,
        total_ingresos: data.total_ingresos,
        observaciones: data.observaciones
        
        
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.updateBook(this.id, form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/book-details', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }

  bookDetails() {
    this.router.navigate(['/book-details', this.id]);
  }
}
