import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Starnding', Validators.required]
    ])
  });

  public newFavorite:FormControl = new FormControl('',[Validators.required])

  constructor(private fb:FormBuilder) {}

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onSubmit(): void {

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

  onDeletedFavorite(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  onAddToFavorite(): void {
    if (!this.newFavorite.invalid) {

      const newGame = this.newFavorite.value;

      this.favoriteGames.push(
        this.fb.control(newGame, Validators.required)
      );

      this.newFavorite.reset();
    }
  }

  isValidField( field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  isValidFieldInArray(FormArray: FormArray, index: number) {
    return FormArray.controls[index].errors
    && FormArray.controls[index].touched;
  }

  getFieldError( field: string) {

    if (!this.myForm.controls[field])  return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {

      switch(key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength } caracteres.`;
      }
    }
    return "Hola Mundo";
  }

}
