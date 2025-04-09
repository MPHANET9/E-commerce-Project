import HeroSection from "../../components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="w-[60%] flex flex-col items-center justify-between py-8">
        <div className="text-center px-8">
          <h3 className="text-xl mb-2 tracking-wide font-medium">What's on Menu?</h3>
          <p className="mb-4">Every bite and sip made with purpose and love</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-center justify-between">
            <div>
              <h3>🍀Health</h3>
              <p>Balanced, body-loving ingredients</p>
            </div>
            <div>
              <h3>☮peace</h3>
              <p>
                A calm, welcoming lattes and soul-soothing drinks for inner calmness
                and cozy.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div>
              <h3>😄Joy</h3>
              <p>Vibrant flavors that spark happiness</p>
            </div>
            <div>
              <h3>🕊Soulful Bites</h3>
              <p>
                Nutritious meals and light sweets -designed to bright your day-
                delicious and satisfying
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex items-center justify-between">
        <div className="h-28 w-120 bg-gray-500">
          Image
        </div>
        <div className="text-center p-8">
          <h2 className="">The Wholesome Space</h2>
          <h6>Come as You Are. Leave Recharged</h6>
          <p>
            Wholesome Cup is more than a cafe, it's a sanctuary. Whether your journing in a corner,
            laughing with a friend, or grabbing a quick pick up mug, our space is designed to hold
            you gently. With cozy reating, soft music, and welcoming faces.
          </p>
          <p>
            "You don't have to do anything.
            Just sip, relax and enjoy.
          </p>
        </div>
      </div>
    </main>
  );
}
