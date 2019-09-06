import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;
  id: string = '';
  nombre: string = '';
  sexo: string = '';
  edad: string = '';
  estado_civil: string = '';
  telefono: string = '';
  escolaridad: string = '';
  ocupacion: string = '';
  domicilio: string = '';
  correo: string = '';
  apoyo_solicitado: string = '';
  fecha: string = '';
  published_year: string = '';
  lugar_trabajo: string = '';
  puesto: string = '';
  salario: string = '';
  otros_ingresos: string = '';
  total_ingresos: string = '';
  observaciones: string = '';

  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      'id': [null, Validators.required],
      'nombre': [null, Validators.required],
      'sexo': [null, Validators.required],
      'edad': [null, Validators.required],
      'estado_civil': [null, Validators.required],
      'telefono': [null, Validators.required],
      'escolaridad': [null, Validators.required],
      'ocupacion': [null, Validators.required],
      'domicilio': [null, Validators.required],
      'correo': [null, Validators.required],
      'apoyo_solicitado': [null, Validators.required],
      'fecha': [null, Validators.required],
      'published_year': [null, Validators.required],
      'lugar_trabajo': [null, Validators.required],
      'puesto': [null, Validators.required],
      'salario': [null, Validators.required],
      'otros_ingresos': [null, Validators.required],
      'total_ingresos': [null, Validators.required],
      'observaciones': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.postBook(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/encuesta-details', id]);
      }, (err) => {
        console.log(err);
      });
  }
}
