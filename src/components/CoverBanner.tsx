
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const CoverBanner = () => {
  const bannerImages = [
    {
      src: "https://images.unsplash.com/photo-1607344645866-f7e8404adc25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Luxury Gift Basket Collection",
      caption: "Handcrafted Luxury Gifts"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Corporate Gift Solutions",
      caption: "Premium Corporate Gifting"
    },
    {
      src: "https://images.unsplash.com/photo-1617118602566-cc3cffb36dc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      alt: "Special Occasion Gifts",
      caption: "Celebrate Every Moment"
    },
    {
      src: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Personalized Gift Baskets",
      caption: "Tailored Just For You"
    }
  ];

  return (
    <div className="w-full py-10 bg-gradient-to-b from-white to-lavender/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our <span className="text-royal">Premium</span> Collections
        </h2>
        
        <div className="w-full max-w-5xl mx-auto relative">
          <Carousel className="w-full">
            <CarouselContent>
              {bannerImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.caption}</h3>
                        <p className="hidden md:block text-white/90">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-4 bg-white/80 hover:bg-white" />
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-4">
            {bannerImages.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-royal/30"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverBanner;
