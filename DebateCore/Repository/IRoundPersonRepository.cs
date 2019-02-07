using DebateCore.Model;
using System;
using System.Collections.Generic;

namespace DebateCore.Repository
{
	public interface IRoundPersonRepository
	{
		IEnumerable<RoundPerson> Find(Func<RoundPerson, Boolean> predicate);
		IEnumerable<RoundPerson> GetAll();
		RoundPerson GetById(int id);
		void Add(RoundPerson item);
		void Update(RoundPerson item);
		void Remove(int id);
	}
}