using DebateCore.Model;
using System;
using System.Collections.Generic;

namespace DebateCore.Repository
{
	public interface IPersonRepository
	{
		IEnumerable<Person> Find(Func<Person, Boolean> predicate);
		IEnumerable<Person> GetAll();
		Person GetById(int id);
		void Add(Person item);
		void Update(Person item);
		void Remove(int id);
	}
}
