using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CAEindwerk.Model
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            List<Guitar> guitars = new List<Guitar>();
            context.Database.EnsureCreated();

            //if (!context.Guitars.Any())
            if (context.Guitars.ToList().Count() == 0)
            {
                guitars.Add(new Guitar()
                {
                    Name = "Cort CR100",
                    BuildYear = 2016,
                    PurchaseYear = 2016,
                    Image = "https://i.ebayimg.com/images/g/NocAAOSwnipWYYKr/s-l300.jpg"
                });
                guitars.Add(new Guitar()
                {
                    Name = "Cort Earth",
                    BuildYear = 2017,
                    PurchaseYear = 2017,
                    Image = "https://cdn.shopify.com/s/files/1/2501/6068/products/C18-EARTH200ATV-SG_1526543123072_498x498.jpg?v=1526545977"
                });
                guitars.Add(new Guitar()
                {
                    Name = "Fender Jaguar Special Player HH",
                    BuildYear = 2017,
                    PurchaseYear = 2017,
                    Image = "https://d1aeri3ty3izns.cloudfront.net/media/27/270000/1200/preview_1.jpg"
                });
                guitars.Add(new Guitar()
                {
                    Name = "Solar A2.6TRBM",
                    BuildYear = 2019,
                    PurchaseYear = 2019,
                    Image = "https://www.solar-guitars.com/wp-content/uploads/2019/04/A2.6TBR-DETAIL.png"
                });
                
                foreach (Guitar guitar in guitars)
                {
                    context.Guitars.Add(guitar);
                }
                context.SaveChanges();
            }
        }
    }
}
