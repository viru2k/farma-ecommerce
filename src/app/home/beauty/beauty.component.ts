import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { VideoModalComponent } from "../../shared/components/modal/video-modal/video-modal.component";
import { ProductSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss']
})
export class BeautyComponent implements OnInit, OnDestroy {

  public themeLogo: string = 'assets/images/icon/logo-farmatotal.png'; // Change Logo
  public products: Product[] = [];

  public ProductSliderConfig: any = ProductSlider;

  @ViewChild("videoModal") VideoModal: VideoModalComponent;

  constructor(public productService: ProductService) {
      this.productService.getProducts.subscribe(response => 
        this.products = response.filter(item => item.type == 'perfumeria')
      );
  }

  // Sliders
  public sliders = [{
    title: '',
    subTitle: '',
    image: 'assets/images/slider/1.jpg'
  }, {
    title: '',
    subTitle: '',
    image: 'assets/images/slider/_1.jpg'
  }];

/* 
  public sliders = [{
    title: 'Del 1 al 24 de septiembre',
    subTitle: 'Ofertas especiales',
    image: 'assets/images/slider/1.jpg'
  }, {
    title: 'Ahorre el 10%',
    subTitle: 'En perfurmeria',
    image: 'assets/images/slider/_1.jpg'
  }]; */
  // Blogs
  public blogs = [{
    image: 'assets/images/blog/20.jpg',
    date: '25 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/21.jpg',
    date: '26 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/22.jpg',
    date: '27 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/23.jpg',
    date: '28 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }]

  ngOnInit(): void {
    // Change color for this layout
    document.documentElement.style.setProperty('--theme-deafult', '#219ebc');
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-deafult');
  }

}


// db363e rojo boton , b4b5ba texto