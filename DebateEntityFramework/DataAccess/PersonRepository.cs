using DebateCore.Model;
using DebateCore.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DebateEntityFramework.DataAccess
{
	public class PersonRepository : IPersonRepository
	{
		DebateContext db;

		public PersonRepository(DebateContext context)
		{
			db = context;
		}

		public void Add(Person item)
		{
			db.Add(item);
			db.SaveChanges();
		}

		public IEnumerable<Person> Find(Func<Person, bool> predicate)
		{
			var persons = db.Persons.Where(predicate);
			return persons;
		}

		public IEnumerable<Person> GetAll()
		{
			var persons = db.Persons.ToList();
			return persons;
		}

		public Person GetById(int id)
		{
			var person = db.Persons.Single(t => t.Id == id);
			return person;
		}

		public void Remove(int id)
		{
			var person = db.Persons.Single(t => t.Id == id);
			person.Deleted = true;
			db.Persons.Update(person);
			db.SaveChanges();
		}

		public void Update(Person item)
		{
			var person = db.Persons.Single(t => t.Id == item.Id);
			person.Deleted = true;
			db.Persons.Update(person);
			db.Add(item);
			db.SaveChanges();
		}
	}
}
