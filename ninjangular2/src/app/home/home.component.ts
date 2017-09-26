import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// add ninjas to this component
import { AppComponent } from '../app.component';

@Component({
	moduleId: module.id, 
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	
	homeTitle = "Welcome to the ninja directory";
	
	// add ninjas to this component
	@Input() ninja;
	@Output() onYell = new EventEmitter();

	fireYellEvent(e) {
		this.onYell.emit(e);
	}

	newNinja = {
		name: "Razvan",
		belt: "blue",
		available: true
	};

	constructor() { }

	ngOnInit() {
	}

}
