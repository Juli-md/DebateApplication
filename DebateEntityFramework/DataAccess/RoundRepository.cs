using DebateCore.Model;
using DebateCore.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DebateEntityFramework.DataAccess
{
	public class RoundRepository : IRoundRepository
	{
		DebateContext db;

		public RoundRepository(DebateContext context)
		{
			db = context;
		}

		public void Add(Round item)
		{
			db.Add(item);
			db.SaveChanges();
		}

		public IEnumerable<Round> Find(Func<Round, bool> predicate)
		{
			var rounds = db.Rounds.Where(predicate);
			return rounds;
		}

		public IEnumerable<Round> GetAll()
		{
			var rounds = db.Rounds.ToList();
			return rounds;
		}

		public Round GetById(int id)
		{
			var round = db.Rounds.Single(t => t.Id == id);
			return round;
		}

		public void Remove(int id)
		{
			var round = db.Rounds.Single(t => t.Id == id);
			round.Deleted = true;
			db.Rounds.Update(round);
			db.SaveChanges();
		}

		public void Update(Round item)
		{
			var round = db.Rounds.Single(t => t.Id == item.Id);
			round.Deleted = true;
			db.Rounds.Update(round);
			db.Add(item);
			db.SaveChanges();
		}
	}
}
