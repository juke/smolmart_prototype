import { useState, useRef, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, Sparkles, Flame, Clock, TrendingUp, Banana, Palette, Crown, Star, Heart, Eye, PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import artworksData from "@/data/artworks.json"
import { getImagePath } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface ArtworkCardProps {
  artwork: typeof artworksData.artworks[0]
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

function ArtworkCard({ artwork }: ArtworkCardProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 })
  const [isTouchDevice] = useState('ontouchstart' in window)
  const [showHoldHint, setShowHoldHint] = useState(false)
  const animationFrameRef = useRef<number>()
  const touchStartPosRef = useRef({ x: 0, y: 0 })
  const touchTimerRef = useRef<NodeJS.Timeout>()
  const holdHintTimeoutRef = useRef<NodeJS.Timeout>()

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsHovered(true)
      setOpacity(artwork.status === "Limited Edition" ? 0.6 : 0.25)
      setMousePosition({ x: 50, y: 50 })
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      const animate = () => {
        setRotation(prev => ({
          x: prev.x + (targetRotation.x - prev.x) * 0.2,
          y: prev.y + (targetRotation.y - prev.y) * 0.2
        }))
        animationFrameRef.current = requestAnimationFrame(animate)
      }
      animationFrameRef.current = requestAnimationFrame(animate)
    }
  }

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsHovered(false)
      setTargetRotation({ x: 0, y: 0 })
      setRotation({ x: 0, y: 0 })
      setMousePosition({ x: 50, y: 50 })
      setOpacity(0)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }

  // Add/remove overflow hidden class on body when card is active
  useEffect(() => {
    if (isHovered) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isHovered])

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0]
    touchStartPosRef.current = { x: touch.clientX, y: touch.clientY }
    
    // Clear any existing timers
    if (touchTimerRef.current) {
      clearTimeout(touchTimerRef.current)
    }
    if (holdHintTimeoutRef.current) {
      clearTimeout(holdHintTimeoutRef.current)
    }
    
    // Show hold hint immediately
    setShowHoldHint(true)
    
    // Hide hold hint after 1 second
    holdHintTimeoutRef.current = setTimeout(() => {
      setShowHoldHint(false)
    }, 1000)
    
    // Set a timer for 1 second before activating the effect
    touchTimerRef.current = setTimeout(() => {
      if (!isHovered) {
        setIsHovered(true)
        setOpacity(artwork.status === "Limited Edition" ? 0.6 : 0.25)
        setMousePosition({ x: 50, y: 50 })
        
        // Start animation frame for smooth tilt
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        const animate = () => {
          setRotation(prev => ({
            x: prev.x + (targetRotation.x - prev.x) * 0.2,
            y: prev.y + (targetRotation.y - prev.y) * 0.2
          }))
          animationFrameRef.current = requestAnimationFrame(animate)
        }
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }, 1000)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    // If not hovered yet (still in hold timer), allow scrolling
    if (!isHovered) {
      const touch = e.touches[0]
      const touchDistance = Math.hypot(
        touch.clientX - touchStartPosRef.current.x,
        touch.clientY - touchStartPosRef.current.y
      )
      
      // If user starts scrolling, cancel the hold timer
      if (touchDistance > 10) {
        if (touchTimerRef.current) {
          clearTimeout(touchTimerRef.current)
        }
        if (holdHintTimeoutRef.current) {
          clearTimeout(holdHintTimeoutRef.current)
        }
        setShowHoldHint(false)
        return
      }
    }

    if (!imageRef.current || !isHovered) return

    const touch = e.touches[0]
    const rect = imageRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const normalizedX = (touch.clientX - centerX) / (rect.width / 2)
    const normalizedY = (touch.clientY - centerY) / (rect.height / 2)
    
    const dampingFactor = 0.3
    const maxTilt = 10
    const rotateX = -normalizedY * maxTilt * dampingFactor
    const rotateY = normalizedX * maxTilt * dampingFactor
    
    setTargetRotation({ x: rotateX, y: rotateY })
    
    const posx = ((touch.clientX - rect.left) / rect.width) * 100
    const posy = ((touch.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x: posx, y: posy })
  }

  const handleTouchEnd = () => {
    // Clear all timers
    if (touchTimerRef.current) {
      clearTimeout(touchTimerRef.current)
    }
    if (holdHintTimeoutRef.current) {
      clearTimeout(holdHintTimeoutRef.current)
    }
    
    setShowHoldHint(false)
    setIsHovered(false)
    setTargetRotation({ x: 0, y: 0 })
    setRotation({ x: 0, y: 0 })
    setMousePosition({ x: 50, y: 50 })
    setOpacity(0)
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || isTouchDevice) return

    const rect = imageRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const normalizedX = (e.clientX - centerX) / (rect.width / 2)
    const normalizedY = (e.clientY - centerY) / (rect.height / 2)
    
    const dampingFactor = 0.4
    const maxTilt = 6
    const rotateX = -normalizedY * maxTilt * dampingFactor
    const rotateY = normalizedX * maxTilt * dampingFactor
    
    const posx = ((e.clientX - rect.left) / rect.width) * 100
    const posy = ((e.clientY - rect.top) / rect.height) * 100
    
    setTargetRotation({ x: rotateX, y: rotateY })
    setMousePosition({ x: posx, y: posy })
  }

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

  useEffect(() => {
    const animate = () => {
      setRotation(prev => ({
        x: prev.x + (targetRotation.x - prev.x) * 0.2,
        y: prev.y + (targetRotation.y - prev.y) * 0.2
      }))
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    if (isHovered) {
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isHovered, targetRotation])

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (touchTimerRef.current) {
        clearTimeout(touchTimerRef.current)
      }
      if (holdHintTimeoutRef.current) {
        clearTimeout(holdHintTimeoutRef.current)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <>
      {isHovered && isTouchDevice && (
        <div 
          className="fixed inset-0 z-50 bg-transparent touch-none"
          onTouchMove={(e) => e.preventDefault()}
        />
      )}
      <motion.div
        variants={item}
        data-rarity={artwork.status === "Limited Edition" ? "rare ultra" : "rare holo"}
        {...(artwork.status === "Limited Edition" ? { "data-supertype": "pokémon" } : {})}
        className="card relative w-full border bg-card text-card-foreground group rounded-lg select-none"
      >
        <div className="card__front">
          <div className="relative overflow-visible">
            <div 
              ref={imageRef}
              className={`card__image-container relative aspect-square overflow-hidden rounded-t-lg ${isHovered && isTouchDevice ? 'touch-none' : ''}`}
              style={{
                transform: isHovered 
                  ? `perspective(800px) 
                     rotateX(${rotation.x}deg) 
                     rotateY(${rotation.y}deg) 
                     scale3d(1.04, 1.04, 1.04)
                     translateZ(50px)`
                  : 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0)',
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)',
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center',
                borderRadius: isHovered ? '0.5rem' : '0.5rem 0.5rem 0 0',
                '--o': opacity,
                '--pos': `${mousePosition.x}% ${mousePosition.y}%`,
                willChange: 'transform',
                touchAction: isHovered && isTouchDevice ? 'none' : 'auto',
              } as React.CSSProperties}
              onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={getImagePath(artwork.image)}
                alt={artwork.title}
                className="h-full w-full object-cover transform-gpu"
              />
              <div className="card__shine absolute inset-0" />
              <div className="card__glare absolute inset-0" />
              
              {/* Hold hint indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: showHoldHint ? 1 : 0,
                  scale: showHoldHint ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="bg-black/80 backdrop-blur-sm px-3 py-2 rounded-full text-white text-sm font-medium shadow-lg">
                  Hold to view
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"
              >
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                  transition={{ 
                    type: "spring",
                    damping: 20,
                    stiffness: 300,
                    opacity: { duration: 0.2 }
                  }}
                  className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold select-none
                    ${artwork.status === "Limited Edition" 
                      ? "bg-gradient-to-r from-amber-600/90 via-yellow-500/90 to-amber-600/90 text-white shadow-lg shadow-amber-500/30" 
                      : "bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 text-white shadow-md shadow-slate-500/20"
                    }`}
                >
                  <motion.div
                    initial={false}
                    animate={isHovered ? {
                      scale: [1, 1.05, 1],
                      opacity: [1, 0.9, 1],
                    } : { scale: 1, opacity: 1 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`flex items-center gap-1.5 select-none ${
                      artwork.status === "Limited Edition"
                        ? "drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]"
                        : "drop-shadow-[0_0_4px_rgba(148,163,184,0.4)]"
                    }`}
                  >
                    {artwork.status === "Limited Edition" ? (
                      <>
                        <motion.span
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.9, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }}
                          className="text-amber-200 drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]"
                        >
                          ★
                        </motion.span>
                        <span className="font-bold text-amber-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                          Ultra Rare
                        </span>
                      </>
                    ) : (
                      <>
                        <motion.span
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.9, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }}
                          className="text-blue-200 drop-shadow-[0_0_4px_rgba(148,163,184,0.4)]"
                        >
                          ◇
                        </motion.span>
                        <span className="font-bold text-slate-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                          Rare
                        </span>
                      </>
                    )}
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={isHovered ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeOut",
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute top-2 left-2 flex items-center"
                >
                  <div className="relative flex items-center group">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200/40 via-yellow-300/40 to-yellow-500/40 animate-spin-slow" />
                      <div className="relative w-[22px] h-[22px] rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-[1px]">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                          <span className="text-[10px] font-bold bg-gradient-to-br from-purple-300 to-pink-300 text-transparent bg-clip-text">
                            {artwork.artist[0].toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="h-[22px] flex flex-col justify-center ml-1.5">
                      <div className="flex flex-col leading-[1.1]">
                        <span className="text-[8px] font-medium text-purple-200/70 tracking-wider uppercase -mb-0.5">
                          Artist
                        </span>
                        <div className="text-[11px] font-bold tracking-wide bg-gradient-to-r from-yellow-100 via-yellow-200 to-amber-200 text-transparent bg-clip-text">
                          {artwork.artist}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-2 left-2 right-2 flex justify-between text-white"
                >
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.23, 1, 0.32, 1],
                      delay: 0.1
                    }}
                    className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/50"
                  >
                    <Heart className="w-3 h-3 text-red-500" />
                    <span className="text-xs font-medium">{artwork.bananas}k</span>
                  </motion.div>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.23, 1, 0.32, 1],
                      delay: 0.15
                    }}
                    className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/50"
                  >
                    <Eye className="w-3 h-3 text-blue-500" />
                    <span className="text-xs font-medium">{Math.floor(artwork.bananas * 2.5)}k</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          <div className="p-4 flex flex-col gap-2 rounded-b-lg select-none">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold truncate text-base">{artwork.title}</h3>
                <span className="flex items-center gap-1 text-yellow-500 shrink-0">
                  <Banana className="h-4 w-4" />
                  <span>{artwork.bananas}</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">by {artwork.artist}</p>
            </div>
            <div className="relative">
              <div className="flex overflow-x-auto no-scrollbar items-center gap-1 pb-0.5 mask-fade-right">
                {artwork.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent" />
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
              <Button variant="outline" size="sm" className="rounded-md">
                Request Custom
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
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
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

  const filteredArtworks = useMemo(() => {
    return artworksData.artworks.filter((artwork) => {
      const matchesCategory =
        selectedCategory === "All" || artwork.category === selectedCategory
      const matchesSearch =
        artwork.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        artwork.artist.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        artwork.tags.some(tag => tag.toLowerCase().includes(debouncedSearchQuery.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, debouncedSearchQuery])

  const { stats } = artworksData

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed top-[3.54rem] left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-[1400px] py-3 md:py-6 px-4">
          <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between md:hidden w-full">
              <div className="flex items-center gap-3">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
                      <PanelLeft className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[280px] p-0 overflow-y-auto">
                    <div className="space-y-6 p-4 pb-8">
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
                          <div className="relative w-full">
                            <Input
                              placeholder="Search artworks..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="h-9"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                              <Search className="h-4 w-4 text-muted-foreground" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-2 text-sm font-medium">Categories</h3>
                        <div className="space-y-1">
                          {artworksData.categories.map((category) => {
                            const categoryCount = artworksData.artworks.filter(
                              artwork => category === "All" ? true : artwork.category === category
                            ).length;
                            
                            return (
                              <Button
                                key={category}
                                variant={selectedCategory === category ? "secondary" : "ghost"}
                                className="w-full justify-between"
                                onClick={() => setSelectedCategory(category)}
                              >
                                <span>{category}</span>
                                <span className={`ml-auto inline-flex h-5 items-center justify-center rounded-full px-2 text-xs font-medium
                                  ${selectedCategory === category 
                                    ? "bg-primary/10 text-primary" 
                                    : "bg-muted text-muted-foreground"}`}
                                >
                                  {categoryCount}
                                </span>
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                <h2 className="text-lg font-semibold tracking-tight">Smol Gallery</h2>
              </div>
              <div className="flex items-center">
                <div className="bg-muted/50 rounded-full py-0.5 px-0.5 border border-border/40">
                  <div className="flex items-center">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-10 rounded-full flex items-center justify-center hover:bg-background p-0 transition-colors"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span className="sr-only">Featured</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-10 rounded-full flex items-center justify-center hover:bg-background p-0 transition-colors"
                    >
                      <Flame className="h-4 w-4" />
                      <span className="sr-only">Popular</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-10 rounded-full flex items-center justify-center hover:bg-background p-0 transition-colors"
                    >
                      <Clock className="h-4 w-4" />
                      <span className="sr-only">Recent</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Smol Gallery</h2>
                <p className="text-sm text-muted-foreground">
                  Discover and collect unique Smol artworks
                </p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center">
              <div className="bg-muted/50 rounded-full py-1 px-1 border border-border/40">
                <div className="flex items-center gap-0.5">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 px-3 rounded-full flex items-center justify-center hover:bg-background"
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    <span className="text-sm">Featured</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 px-3 rounded-full flex items-center justify-center hover:bg-background"
                  >
                    <Flame className="h-4 w-4 mr-2" />
                    <span className="text-sm">Popular</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 px-3 rounded-full flex items-center justify-center hover:bg-background"
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">Recent</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:hidden mt-2">
            <div className="relative w-full">
              <Input
                placeholder="Search artworks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 w-full pr-8 text-sm"
              />
              <div className="absolute right-0 top-0 h-8 w-8 flex items-center justify-center pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 pt-32 md:pt-32">
        <div className="container mx-auto max-w-[1400px] relative px-4 md:px-0">
          <div className="fixed w-[280px] hidden md:block">
            <div className="rounded-lg border bg-card shadow-lg">
              <div className="space-y-6 p-4 h-[calc(100vh-8rem)] overflow-y-auto">
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
                    <div className="relative w-full">
                      <Input
                        placeholder="Search artworks..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="h-9"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Search className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-medium">Categories</h3>
                  <div className="space-y-1">
                    {artworksData.categories.map((category) => {
                      const categoryCount = artworksData.artworks.filter(
                        artwork => category === "All" ? true : artwork.category === category
                      ).length;
                      
                      return (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "secondary" : "ghost"}
                          className="w-full justify-between"
                          onClick={() => setSelectedCategory(category)}
                        >
                          <span>{category}</span>
                          <span className={`ml-auto inline-flex h-5 items-center justify-center rounded-full px-2 text-xs font-medium
                            ${selectedCategory === category 
                              ? "bg-primary/10 text-primary" 
                              : "bg-muted text-muted-foreground"}`}
                          >
                            {categoryCount}
                          </span>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:pl-[calc(280px+1rem)]">
            <motion.div 
              layout
              className="grid auto-rows-max grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 w-full px-2 md:px-3 relative"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {filteredArtworks.map((artwork) => (
                <motion.div 
                  key={artwork.id} 
                  className="h-fit" 
                  style={{ 
                    transformStyle: 'preserve-3d',
                    position: 'relative',
                    padding: '1.5rem',
                    margin: '-1.5rem'
                  }}
                  layout="position"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      mass: 0.5
                    }
                  }}
                  exit={{ 
                    scale: 0.9, 
                    opacity: 0,
                    transition: { duration: 0.15 }
                  }}
                >
                  <ArtworkCard artwork={artwork} />
                </motion.div>
              ))}

              {filteredArtworks.length === 0 && (
                <motion.div
                  key="empty"
                  className="col-span-full flex items-center justify-center py-8 text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <p>No artworks found matching your criteria</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
} 