import Image from "next/image";
import _conference_schedule from "../../../public/_conference_schedule.jpeg";


export default function Event() {
  return (
    <main>
      <div className="flex flex-row items-center justify-center pt-44">
        <Image
          src={_conference_schedule}
          width={1000}
          height={1000}
          alt="svg image"
          className="h-auto w-auto border-spacing-2 shadow-2xl rounded-lg"
          />
        
      </div>
        <div className="p-10">
            <h1 className="text-3xl pb-4">Detailed Event Walkthrough</h1>
            <div>
              <p className="mb-4 text-sm text-justify">The second annual California Neurotechnology Conference will be a full-day event held at UC Davis and jointly hosted by UC Davis, UCLA, UC Berkeley, UC San Diego, UC Santa Cruz, and USC. The event will bring together undergraduate student neurotechnology clubs from across the west coast, along with graduate students, academic researchers, and industry professionals. There are 4 main components of the conference: guest speaker presentations, industry and academic panels, a student club BCI competition, and research poster sessions. All four components except the research poster sessions will also be live-streamed to reach a broader audience.</p>
              <p className="mb-4 text-sm text-justify">To kick off and wrap up the conference, we will be hearing from our two esteemed speakers. Nathan Copeland is a BCI pioneer, neurotech consultant, and digital artist; he holds the record for longest time living with a BCI implant and has operated more machines with his mind than any other individual. Dr. David Eagleman is a Stanford neuroscience professor, author, and CEO of Neosensory; at Neosensory, Eagleman is working to restore senses such as hearing to those who have lost it, and also to revolutionize the way we experience the world by creating new senses for humans.</p>
              <p className="mb-4 text-sm text-justify">In addition to our speakers, participants will be able to ask questions of neurotech experts on both our industry and academic Q&A panels. The industry panel will consist of company leaders, scientists, and engineers who will discuss their experiences and cutting-edge developments from emerging neurotech startups to industry-leading corporations. On the academic panel, we will have professors, researchers, and other visionaries sharing the exciting work being done in their labs.</p>
              <p className="mb-4 text-sm text-justify">Beyond hearing from speakers and panelists, participants will have the opportunity to share their own research during our two poster sessions. This can include projects done as part of a student neurotech organization, in a lab, or independently. Posters will be set up all around the space, so attendees can roam to learn about the great variety of research their peers are working on. This is a great time for participants to showcase unique findings, exchange ideas, and network.</p>
              <p className="mb-4 text-sm text-justify">During the poster session, our conference sponsors will also be holding booths, where participants can chat with company representatives. Sponsors can utilize this time to advertise products, recruit from a talented applicant pool, and form connections with potential partners and collaborators. </p>
              <p className="mb-4 text-sm text-justify">Our longest and perhaps most unique component of the conference will be the student clubs BCI competition. One team of students from each participating school will present a neurotechnology project they have been working on over the course of the academic year, including a live demonstration. The projects will be evaluated by a panel of expert judges, and the winning team will be announced at the end of the conference in conjunction with our closing ceremony.</p>
              <p className="mb-4 text-sm text-justify">In 2023, we brought together over 300 neurotechnology enthusiasts from all backgrounds to create an experience far beyond our own expectations. In 2024, we will build on the success of our inaugural conference as we continue to inspire, educate, and unite.</p>
            </div>
        </div>
        <script async src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
    </main>
  );
}
