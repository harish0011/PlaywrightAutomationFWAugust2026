import {Locator, Page} from '@playwright/test';
import { Basepage } from './Basepage.js';

export class ProductInfoPage extends Basepage
{

    private readonly productHeader:Locator
    private readonly productImages: Locator
    private readonly productMetadata: Locator  // metaData Information like Brand, Product Code, Reward Points, Availability
    private readonly productPrice: Locator
    private readonly map:Map<string,string>;
    private readonly AddToCart:Locator;
    private readonly ItemCheck:Locator;

    constructor(page: Page)
    {
        super(page);
        this.productHeader = page.locator("h1");
        this.productImages = page.locator("//div[@class='image magnific-popup']//img");
        this.productMetadata = page.locator("(//div[@class='col-sm']//ul[@class='list-unstyled'])[1]//li");
        this.productPrice = page.locator("(//div[@class='col-sm']//ul[@class='list-unstyled'])[2]//span");
        this.map=new Map<string,string>();
        this.AddToCart=page.locator('#button-cart');
        this.ItemCheck=page.locator("//i[@class='fa-solid fa-cart-shopping']/parent::button");

    }

   async getProductHeader():Promise<string>
   {
      return await this.productHeader.innerText();
   } 

   async getProductImagesCount():Promise<number>
   {
    await this.productImages.first().waitFor({state:'visible'});
    return await this.productImages.count();
   }

   async getProductMetaData():Promise<void>
   {
    await this.productMetadata.first().waitFor({state:'visible'});
    let metaInfo:string[]=await this.productMetadata.allInnerTexts();
    for(let data of metaInfo)
    {
       let meta= data.split(":");
       let metaKey=meta[0].trim();
       let metaValue=meta[1].trim();

       this.map.set(metaKey,metaValue);

    }
   }

   async getProductPricingData():Promise<void>
   {
     let priceInfo=await this.productPrice.innerText();
     this.map.set("Product Price", priceInfo);
   }

   async getProductCompleteInfo():Promise<Map<string,string>>
   {
      await this.getProductMetaData();
      await this.getProductPricingData();
      return this.map;
   }

   async clickonAddToCart():Promise<void>
   {
      await this.AddToCart.click()
   }

   async itemChecking():Promise<void>
   {
      await this.ItemCheck.click();
   }

}