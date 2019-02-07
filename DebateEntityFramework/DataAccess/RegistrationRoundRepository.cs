using DebateCore.Model;
using DebateCore.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DebateEntityFramework.DataAccess
{
	public class RegistrationRoundRepository : IRegistrationRoundRepository
	{
		DebateContext db;

		public RegistrationRoundRepository(DebateContext context)
		{
			db = context;
		}

		public void Add(RegistrationRound item)
		{
			item.CreatedDate = DateTime.Now;
			db.Add(item);
			db.SaveChanges();
		}

		public IEnumerable<RegistrationRound> Find(Func<RegistrationRound, bool> predicate)
		{
			var registrationRounds = db.RegistrationRounds.Where(predicate);
			return registrationRounds;
		}

		public IEnumerable<RegistrationRound> GetAll()
		{
			var registrationRounds = db.RegistrationRounds.ToList();
			return registrationRounds;
		}

		public RegistrationRound GetById(int id)
		{
			var registrationRounds = db.RegistrationRounds.Single(t => t.Id == id);
			return registrationRounds;
		}

		public void Remove(int id)
		{
			var registrationRound = db.RegistrationRounds.Single(t => t.Id == id);
			registrationRound.ModifiedDate = DateTime.Now;
			registrationRound.Deleted = true;
			db.RegistrationRounds.Update(registrationRound);
			db.SaveChanges();
		}

		public void Update(RegistrationRound registrationRound)
		{
			registrationRound.ModifiedDate = DateTime.Now;
			db.RegistrationRounds.Update(registrationRound);
			db.SaveChanges();
		}
	}
}
