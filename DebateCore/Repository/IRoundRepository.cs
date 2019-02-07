using DebateCore.Model;
using System;
using System.Collections.Generic;

namespace DebateCore.Repository
{
	public interface IRoundRepository
	{
		IEnumerable<Round> Find(Func<Round, Boolean> predicate);
		IEnumerable<Round> GetAll();
		Round GetById(int id);
		void Add(Round item);
		void Update(Round item);
		void Remove(int id);
	}
}