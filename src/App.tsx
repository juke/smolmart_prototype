import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainLayout } from "@/components/layout/main-layout"
import { ThemeProvider } from "@/components/theme-provider"
import GalleryPage from "@/pages/gallery/page"

// Placeholder components for now
const Home = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Welcome to SmolMart</h1>
    <p className="text-muted-foreground">
      Discover and collect unique digital artworks
    </p>
  </div>
)

const Artists = () => <div>Artists Page</div>
const About = () => <div>About Page</div>

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="smolmart-theme">
      <Router basename="/smolmart_prototype">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery/*" element={<GalleryPage />} />
            <Route path="/artists/*" element={<Artists />} />
            <Route path="/about/*" element={<About />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  )
}

export default App
