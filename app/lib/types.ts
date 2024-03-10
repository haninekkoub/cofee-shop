import { PortableTextBlock } from "sanity"

interface BannerBlock {
    _type: 'block.banner';
    bannerText: string;
    textAlign: 'left' | 'center' | 'right';
    textSize: 'medium' | 'large';
  }
  
  interface AboutBlock {
    _type: 'block.about';
    aboutImage: "image"; 
    aboutDescription: string; 
    featuredImageTop: "image"; 
    featuredImageBottom: "image";
  }
  
  interface MissionBlock {
    _type: 'block.mission';
    leftImage: "image"; 
    description: string;
    rightImage: "image"; 
  }

  interface ShowCaseBlock {
    leftImage: "image"; 
    centerImage: "image"; 
    rightImage: "image"; 
  }

  interface TextSegmentBlock {
    textSegment: PortableTextBlock[]; 
  }

  interface ProductList {
    products: Product[];
  }
  
  interface Product {
    image:"image";
    type:"string"
    productName:"string";
    slug:"slug";
    Price:"number";
    Description:"string";
    taste:"string";
  }

  interface Page {
    name: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    content: Array<BannerBlock | AboutBlock | MissionBlock>;
  }
  
  export type { BannerBlock, AboutBlock, MissionBlock,ShowCaseBlock,TextSegmentBlock,Product, ProductList,Page };