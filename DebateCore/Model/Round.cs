using System;
using System.Collections.Generic;

namespace DebateCore.Model
{
    public class Round: BaseModel
    {
        public string Motion { get; set; }
        public string Infoslide { get; set; }
        public Person Chair { get; set; }
        public List<Person> Wing { get; set; }
        public DateTime DateTime { get; set; }
		public Language Language { get; set; }
	}
}
