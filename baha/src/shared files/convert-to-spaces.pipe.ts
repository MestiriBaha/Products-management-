import { Pipe , PipeTransform } from '@angular/core' ;

@Pipe({
  name : 'ConvertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform{

  transform(value: string, character : string): string {
    return value.replace(character,' ') ;


  }

}
