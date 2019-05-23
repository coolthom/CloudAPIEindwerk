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

            if (!context.Guitars.Any())
            {
                guitars.Add(new Guitar()
                {
                    Name = "Cort CR100",
                    BuildYear = 2016,
                    PurchaseYear = 2016,
                    Image = "empty"
                });
                guitars.Add(new Guitar()
                {
                    Name = "Cort Earth",
                    BuildYear = 2017,
                    PurchaseYear = 2017,
                    Image = "empty"
                });
                guitars.Add(new Guitar()
                {
                    Name = "Fender Jaguar Special Player HH",
                    BuildYear = 2017,
                    PurchaseYear = 2017,
                    Image = "empty"
                });
                guitars.Add(new Guitar()
                {
                    Name = "Solar A2.6TRBM",
                    BuildYear = 2019,
                    PurchaseYear = 2019,
                    Image = "empty"
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
