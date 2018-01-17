import { Pipe, PipeTransform } from "@angular/core";

var pipe = {
	name: "convertToSpaces"
};

@Pipe(pipe)
export class ConvertToSpacesPipe implements PipeTransform
{
	transform(value: string, character: string): string
	{
		return value.replace(character, " ");
	}
}
