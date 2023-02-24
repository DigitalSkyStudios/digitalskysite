import Image from "next/image"

interface TeamMember{
  image: string;
  name: string;
  role: string;
  email: string;
  linkedin: string;
  github: string;
}

const team:TeamMember[] = [
  {
    image: '/assets/user.png',
    name: 'Alex',
    role: 'Director/ Head Programmer',
    email: 'alex@outlook.com',
    github: 'https://github.com/DickinsonAlex/',
    linkedin: 'https://www.linkedin.com/in/alex-dickinson-/',
  },
{
    image: '/assets/user.png',
    name: 'Deekay',
    role: 'Programmer',
    email: 'alex@outlook.com',
    github: '',
    linkedin: '',
  },
{
    image: '/assets/user.png',
    name: 'Eggie',
    role: 'Art and Graphics',
    email: 'alex@outlook.com',
    github: '',
    linkedin: '',   
  },
{
    image: '/assets/user.png',
    name: 'Matt',
    role: 'Games Programmer',
    email: 'alex@outlook.com',
    github: '',
    linkedin: '',   
  
  },
];

const page = () => {
  return (
    <main className="main">
      <section>
        <p className="max-w-[45ch] md:max-w-[60ch] mx-auto mb-20 px-9 md:px-5">Meet the team of talented developers and designers behind the amazing work at digital sky.</p>

        <div id="team" className="flex flex-wrap p-14 items-center justify-center my-6 bg-red text-white w-screen gap-16">
          {
            team.map(member =>
            (
              <div key={member.role+member.name} className="flex flex-col items-center">
                <Image className="rounded-md" src={member.image} width={250} height={400} alt={member.name+" "+member.role} />
                <p className="font-bold text-xl my-2">{member.name}</p>
                <p className="text-sm font-bold mb-2">{member.role}</p>
                <p className="text-xs italic">{member.name.toLocaleLowerCase() + '@outlook.com'}</p>
                <div className="mt-4 gap-4 flex">
                  <div className="bg-white rounded-full p-2 hover:scale-125">
                    <a href={member.github} target="_blank" rel="noreferrer">
                      <Image className="rounded-none" src="/assets/github.svg" width={20} height={20} alt="github" />
                    </a>
                  </div>
                  <div className="bg-white rounded-full p-2 hover:scale-125">
                    <a href={member.linkedin} target="_blank" rel="noreferrer">
                      <Image className="rounded-none" src="/assets/linkedin.svg" width={20} height={20} alt="linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          }

        </div>

      </section>
    </main>
  )
}

export default page