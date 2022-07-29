import { Directive, ElementRef ,HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective 
{  private defaultColor : string = '#009688';
   private  defaultHeight : number = 180;
   private initialColor : string = '#f5f5f5'
   //private defaultWidth : number = 100;
   
 @Input( 'appBorderCard') borderColor: string; //alias
 @Input( 'appBorderHeight') borderHeight: string; 
 @Input( 'appBorderWidth') borderWidth: string; 

  constructor(private el: ElementRef) { 
    this.setBorder(this.initialColor);
    this.setHeight(+this.borderHeight || this.defaultHeight);
    this.setWidth(+this.borderWidth );
 }


 //hna kangolo lih si kant 3and 'appBorderCard' une valeur donc hiya li takhad f la couleur

 //@Input () appBorderCard: string;//sans alias
 //donc c'est mieux de specifier le nom de la directive à l'interieur de l'annotation

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder( this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

   setHeight(height : number)
   {  this.el.nativeElement.style.height = `${height}px`;
   }

   setWidth(width : number)
   {  this.el.nativeElement.style.width = `${width}px`; }

   setBorder(color:string)
   {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
   }
}
 

