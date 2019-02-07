using DebateCore.Model;
using Microsoft.EntityFrameworkCore;

namespace DebateEntityFramework
{
    public class DebateContext: DbContext
    {
		public DbSet<Person> Persons { get; set; }
		public DbSet<Round> Rounds { get; set; }
		public DbSet<RoundPerson> RoundPersons { get; set; }
		public DbSet<RegistrationRound> RegistrationRounds { get; set; }

		public DebateContext(DbContextOptions<DebateContext> options)
		   : base(options)
		{ }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Person>().HasKey(u => u.Id);
			modelBuilder.Entity<RoundPerson>().HasKey(u => u.Id);
			modelBuilder.Entity<RegistrationRound>().HasKey(u => u.Id);
			modelBuilder.Entity<Round>().HasKey(u => u.Id);
		}
	}
}
