namespace DebateCore.Model
{
    public class RoundPerson: BaseModel
    {
        public Round Round { get; set; }
        public Person Player { get; set; }
        public Position Position { get; set; }
        public int Runk { get; set; }
        public int SpeakerPoints { get; set; }
    }
}