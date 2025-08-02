import { HeroSection } from "./components/HeroSection"

function App() {
  return (
    <>
      <div className="bg-primary px-8 py-8">
        <div className="flex justify-center font-poppins selection:bg-slate-600">
          <HeroSection/>
        </div>
      </div>
    </>
  )
}

export default App
