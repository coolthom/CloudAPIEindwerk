using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CAEindwerk.Model;
using Microsoft.EntityFrameworkCore;

namespace CAEindwerk.Controllers
{
    [Route("api/guitars")]
    [ApiController]
    public class GuitarsController : ControllerBase
    { 
        public LibraryContext _context { get; set; }
        public GuitarsController(LibraryContext ctxt)
        {
            _context = ctxt;
        }

    [HttpGet]
    public List<Guitar> GetGuitars(string name, int? page, string sort, string dir = "asc", int length = 2)
    {
      IQueryable<Guitar> query = _context.Guitars;

      if (!string.IsNullOrWhiteSpace(name))
        query = query.Where(d => d.Name == name);

      if (!string.IsNullOrWhiteSpace(sort))
      {
        switch (sort)
        {
          case "name":
            if (dir == "asc")
              query = query.OrderBy(d => d.Name);
            else if (dir == "desc")
              query = query.OrderByDescending(d => d.Name);
            break;
          case "buildYear":
            if (dir == "asc")
              query = query.OrderBy(d => d.BuildYear);
            else if (dir == "desc")
              query = query.OrderByDescending(d => d.BuildYear);
            break;
          case "purchaseYear":
            if (dir == "asc")
              query = query.OrderBy(d => d.PurchaseYear);
            else if (dir == "desc")
              query = query.OrderByDescending(d => d.PurchaseYear);
            break;
        }
      }

      if (page.HasValue)
      {
        if (page == 99)
          length = 99;
        else
          query = query.Skip(page.Value * length);

      }
      query = query.Take(length);

      return query.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Guitar> GetGuitar(int id)
        {
            if (_context.Guitars.ToList().Exists(b => b.Id == id))
            {
                return _context.Guitars.ToList().Find(b => b.Id == id);
            }
            else
                return NotFound();
        }

        [Route("{id}")]
        [HttpDelete]
        public ActionResult<Guitar> DeleteGuitar(int id)
        {
            var theGuitar = _context.Guitars.Find(id);
            if (theGuitar == null)
                return NotFound();

            _context.Guitars.Remove(theGuitar);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpPost]
        public ActionResult<Guitar> AddGuitar([FromBody]Guitar guitar)
        {
            _context.Guitars.Add(guitar);
            _context.SaveChanges();
            return Created("", guitar);
        }

        [HttpPut]
        public ActionResult<Guitar> UpdateBook([FromBody]Guitar guitar)
        {
            _context.Guitars.Update(guitar);
            _context.SaveChanges();
            return Created("", guitar);
        }
    }
}
