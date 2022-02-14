import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Story Point Estimator-inator';

  levels= [
    { index: 0, name: 'Low' },
    { index: 1, name: 'Medium' },
    { index: 2, name: 'High' },
  ];

  estimate = 0;

  formValues = {
    effort: new FormControl(0, Validators.required),
    complexity: new FormControl(0, Validators.required),
    risk: new FormControl(0, Validators.required)
  }

  form = new FormGroup(this.formValues);
  
  submit(){
    const values = this.form.value;

    this.estimate = this.getEstimate(values.effort, values.complexity, values.risk);
  }

  getEstimate(effort: number, complexity: number, risk: number){
    if (risk === 3) return 999;

    //storyPoints = [0.5, 1, 2, 3, 5, 8, 13];

    const storyPointMatrix = [
      [0.5, 1, 2], 
        [1, 2, 3], 
        [2, 3, 5], 
        [3, 5, 8],
        [5, 8, 13]
    ];

    return storyPointMatrix[effort + risk][complexity];
  };

  reset() {
    this.estimate = 0;
    this.formValues.complexity.reset(0);
    this.formValues.effort.reset(0);
    this.formValues.risk.reset(0)
  }
}
