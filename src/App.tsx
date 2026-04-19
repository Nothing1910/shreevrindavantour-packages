import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
// import { SpeedInsights } from "@vercel/speed-insights/next";

const MathuraVrindavanGuide = lazy(() => import("./pages/MathuraVrindavanGuide.tsx"));
const HotelBooking = lazy(() => import("./pages/HotelBooking.tsx"));
const TemplesMathuraVrindavan = lazy(() => import("./pages/TemplesMathuraVrindavan.tsx"));
const PackingTips = lazy(() => import("./pages/PackingTips.tsx"));
const FAQPage = lazy(() => import("./pages/FAQPage.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const JanmashtamiGuide = lazy(() => import("./pages/JanmashtamiGuide.tsx"));
const PackagesFrom = lazy(() => import("./pages/PackagesFrom.tsx"));
const DestinationWedding = lazy(() => import("./pages/DestinationWedding.tsx"));

const queryClient = new QueryClient();

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mathura-vrindavan-tour-packages" element={<MathuraVrindavanGuide />} />
            <Route path="/hotel-booking" element={<HotelBooking />} />
            <Route path="/temples-mathura-vrindavan" element={<TemplesMathuraVrindavan />} />
            <Route path="/packing-tips-mathura-vrindavan" element={<PackingTips />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/janmashtami-vrindavan" element={<JanmashtamiGuide />} />
            <Route path="/packages-from" element={<PackagesFrom />} />
            <Route path="/destination-wedding" element={<DestinationWedding />} />
            <Route path="*" element={<NotFound />} />
            {/* <SpeedInsights /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;