import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

let star_component = {
	selector: "pm-star",
	templateUrl: "./templates/star.component.html",
	styleUrls: ["./styles/star.component.css"]
};

@Component(star_component)
export class StarComponent implements OnChanges
{
	@Input() rating: number;
	star_width: number;
	@Output() emitter: EventEmitter<string> = new EventEmitter<string>();

	constructor()
	{
		console.info("StarComponent ctor...");
	}

	ngOnChanges(): void
	{
		this.star_width = this.rating * 86 / 5;
	}

	onClick()
	{
		this.emitter.emit(`The rating ${this.rating} was clicked.`);
	}
}