using System;

namespace DebateCore.Model
{
	public class BaseModel
	{
		public int Id { get; set; }
		public DateTime CreatedDate { get; set; }
		public bool Deleted { get; set; }
	}

	public enum Role
	{
		Admin,
		Member
	}

	public enum Position
	{
		PrimeMinister,
		DeputyPrimeMinister,
		LeaderOpposition,
		DeputyLeaderOpposition,
		MemberGovernment,
		GovernmentWhip,
		MemberOpposition,
		OppositionWhip
	}

	public enum Language
	{
		Russian,
		English
	}
}
