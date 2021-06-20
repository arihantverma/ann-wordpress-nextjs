import Emoji from '@/components/Emoji'
import profileImage from '@/images/me.jpeg'
import Image from 'next/image'

function FunDescription({ children }) {
  return <span className="ml-2">{children}</span>
}

// export default function Haan() {
//   return <div>About</div>
// }
export default function About() {
  return (
    <div className="flex md:w-1/2 mx-auto about-text">
      <div className="my-auto flex flex-col transform -translate-y-8">
        <h1 className="text-center text-4xl font-bold text-gray-600 mb-8">
          <span>Hello Again! </span>
          <Emoji
            className="animate-wave inline-block"
            description="wave"
            emoji="👋🏼"
            style={{
              transformOrigin: '70% 70%',
            }}
          />
        </h1>

        <div className="flex justify-center mb-8">
          <div className="w-36 h-36 relative">
            <Image
              className="rounded-full object-10-0"
              src={profileImage}
              alt="Ann's Headshot Photograph"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="text-gray-500 flex flex-col space-y-4 md:text-xl tracking-tight-text">
          <p>
            Thanks for dropping by. My name is Ann (Tai Chiahui in Chinese;
            Chichi is a nick name). I am a product designer.I am originally from
            Kaohsiung, Taiwan. Being part of the team has given me a good
            working knowledge of how the pieces come together.
          </p>

          <p>
            I am passionate about design and engage myself in product design
            process from user search to prototyping so I can understand better.
            I am excited about coding UI as practice. I find learning to code
            helps me greatly in design. I believe that by going through the
            process of development in web or mobile facilitates me better with
            communication and personal improvement. :{')'}
          </p>

          <ul className="list-none">
            <li>
              <Emoji description="baseball" emoji="⚾️" />
              <FunDescription>
                I am a baseball fan and a soccer fan as well.
              </FunDescription>
            </li>
            <li>
              <Emoji description="heart" emoji="❤️" />
              <FunDescription>
                There are a dog and two cats where I live.
              </FunDescription>
              <Emoji description="dog and cat" emoji=" 🐶😼😼" />
            </li>
            <li>
              <Emoji description="tea coffee" emoji="☕️" />
              <FunDescription>
                I like to drink bubble tea, Matcha and coffee.
              </FunDescription>
            </li>
            <li>
              <Emoji description="speaking" emoji="🗣" />
              <FunDescription>
                I speak English, Chinese, and Taiwanese.
              </FunDescription>
            </li>
            <li>
              <Emoji description="raised hands" emoji="🙌" />
              <FunDescription className="ml-4">
                I traveled across America by train. Yes, Amtrak.
              </FunDescription>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
