﻿using DebateCore.Model;
using DebateCore.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DebateEntityFramework.DataAccess
{
	public class RoundPersonRepository : IRoundPersonRepository
	{
		DebateContext db;

		public RoundPersonRepository(DebateContext context)
		{
			db = context;
		}

		public void Add(RoundPerson item)
		{
			db.Add(item);
			db.SaveChanges();
		}

		public IEnumerable<RoundPerson> Find(Func<RoundPerson, bool> predicate)
		{
			var roundPersons = db.RoundPersons.Where(predicate);
			return roundPersons;
		}

		public IEnumerable<RoundPerson> GetAll()
		{
			var roundPersons = db.RoundPersons.ToList();
			return roundPersons;
		}

		public RoundPerson GetById(int id)
		{
			var roundPerson = db.RoundPersons.Single(t => t.Id == id);
			return roundPerson;
		}

		public void Remove(int id)
		{
			var roundPerson = db.RoundPersons.Single(t => t.Id == id);
			roundPerson.Deleted = true;
			db.RoundPersons.Update(roundPerson);
			db.SaveChanges();
		}

		public void Update(RoundPerson item)
		{
			var roundPerson = db.RoundPersons.Single(t => t.Id == item.Id);
			roundPerson.Deleted = true;
			db.RoundPersons.Update(roundPerson);
			db.Add(item);
			db.SaveChanges();
		}
	}
}
