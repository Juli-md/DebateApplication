using DebateCore.Model;
using System;
using System.Collections.Generic;

namespace DebateCore.Repository
{
	public interface IRegistrationRoundRepository
	{
		IEnumerable<RegistrationRound> Find(Func<RegistrationRound, Boolean> predicate);
		IEnumerable<RegistrationRound> GetAll();
		RegistrationRound GetById(int id);
		void Add(RegistrationRound item);
		void Update(RegistrationRound item);
		void Remove(int id);
	}
}