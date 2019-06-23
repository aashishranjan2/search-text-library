import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'highlight'
})

export class HighlightSearchPipe implements PipeTransform {

    transform(text: any, searchString: any): string {
        if (!searchString) {return text;}
        var re = new RegExp(searchString, 'gi');
        return text.replace(re, "<mark>" + searchString + "</mark>");
    }
}