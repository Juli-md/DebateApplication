using System;
using System.Collections.Generic;

namespace DebateCore.Model
{
    public class RegistrationRound: BaseModel
    {
        public Person Player1 { get; set; }
        public Person Player2 { get; set; }
        public DateTime DateTimeRegistration { get; set; }
        public bool IsJudge { get; set; }
		public List<Person> Wing { get; set; }
		public string Comment { get; set; }
		public Language Language { get; set; }
	}
}
