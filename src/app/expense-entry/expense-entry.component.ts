import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrl: './expense-entry.component.css'
})
export class ExpenseEntryComponent {
  title!: string;

  constructor() {}

  ngOnInit() {
    this.title = 'Expense Entry';
  }
}
