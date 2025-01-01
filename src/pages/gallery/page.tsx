import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Sidebar, 
  SidebarContent, 
  SidebarProvider,
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import artworksData from "@/data/artworks.json"
import { Search, SlidersHorizontal, Sparkles, Flame, Clock, TrendingUp, Banana, Menu, Palette, Crown, Star } from "lucide-react"

interface ArtworkCardProps {
  artwork: typeof artworksData.artworks[0]
  index: number
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

function ArtworkCard({ artwork, index }: ArtworkCardProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Available for Custom":
        return <Palette className="h-4 w-4 text-green-500" />
      case "Limited Edition":
        return <Crown className="h-4 w-4 text-yellow-500" />
      default:
        return <Star className="h-4 w-4 text-blue-500" />
    }
  }

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.02 }}
      className="group w-full rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg"
    >
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold truncate text-base">{artwork.title}</h3>
          <span className="flex items-center gap-1 text-yellow-500 shrink-0">
            <Banana className="h-4 w-4" />
            <span>{artwork.bananas}</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">by {artwork.artist}</p>
        <div className="flex flex-wrap gap-1">
          {artwork.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto pt-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {getStatusIcon(artwork.status)}
              </TooltipTrigger>
              <TooltipContent>
                <p>{artwork.status}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button variant="outline" size="sm">
            Request Custom
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

function ArtistCard({ artist }: { artist: typeof artworksData.artists[0] }) {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-card p-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          {artist.name[0]}
        </div>
        <div>
          <h4 className="font-medium">{artist.name}</h4>
          <p className="text-sm text-muted-foreground">{artist.totalCustoms} customs</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-yellow-500">
        <Banana className="h-4 w-4" />
        <span>{artist.bananas}</span>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArtworks = artworksData.artworks.filter((artwork) => {
    const matchesCategory =
      selectedCategory === "All" || artwork.category === selectedCategory
    const matchesSearch =
      artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  const { stats } = artworksData

  return (
    <SidebarProvider>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="hidden md:block">
          <SidebarContent className="fixed inset-y-0 w-[280px] border-r bg-card px-4 pt-4 pb-[1rem] md:mt-[3.5rem] overflow-y-auto">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg border p-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Volume</span>
                    </div>
                    <p className="mt-1 font-medium">{stats.totalVolume}</p>
                  </div>
                  <div className="rounded-lg border p-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Floor</span>
                    </div>
                    <p className="mt-1 font-medium">{stats.floorPrice}</p>
                  </div>
                  <div className="rounded-lg border p-2">
                    <div className="flex items-center gap-2">
                      <Flame className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Best Offer</span>
                    </div>
                    <p className="mt-1 font-medium">{stats.bestOffer}</p>
                  </div>
                  <div className="rounded-lg border p-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Recent</span>
                    </div>
                    <p className="mt-1 font-medium">{stats.recentSales}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium">Top Artists</h3>
                <div className="space-y-2">
                  {artworksData.artists.map((artist) => (
                    <ArtistCard key={artist.name} artist={artist} />
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search artworks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-9"
                  />
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium">Categories</h3>
                <div className="space-y-1">
                  {artworksData.categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1 flex flex-col min-w-0 md:pl-6">
          <div className="sticky top-0 z-40 flex h-14 shrink-0 items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex w-full items-center justify-between px-4 md:px-6">
              <div className="flex items-center gap-3">
                <SidebarTrigger className="md:hidden">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SidebarTrigger>
                <div>
                  <h2 className="text-base font-bold leading-none mb-0.5">Smol Gallery</h2>
                  <p className="text-[10px] text-muted-foreground">
                    Discover and collect unique Smol artworks
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Button variant="ghost" size="sm" className="md:h-9 md:w-auto md:px-3">
                  <Sparkles className="h-4 w-4" />
                  <span className="sr-only md:not-sr-only md:ml-2">Featured</span>
                </Button>
                <Button variant="ghost" size="sm" className="md:h-9 md:w-auto md:px-3">
                  <Flame className="h-4 w-4" />
                  <span className="sr-only md:not-sr-only md:ml-2">Popular</span>
                </Button>
                <Button variant="ghost" size="sm" className="md:h-9 md:w-auto md:px-3">
                  <Clock className="h-4 w-4" />
                  <span className="sr-only md:not-sr-only md:ml-2">Recent</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 h-full overflow-y-auto p-4 md:p-6">
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 h-fit w-full mx-auto"
              style={{
                maxWidth: 'min(100%, 1800px)',
              }}
            >
              {filteredArtworks.map((artwork, index) => (
                <div key={artwork.id} className="h-fit">
                  <ArtworkCard artwork={artwork} index={index} />
                </div>
              ))}
            </motion.div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
} 