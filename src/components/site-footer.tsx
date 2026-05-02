import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="web-container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* About Us */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">About Us</h3>
            <nav className="flex flex-col gap-2 text-sm font-medium">
              <Link href="#" className="hover:text-[#12D16E] transition-colors">About Seafood Market</Link>
              <Link href="#" className="hover:text-[#12D16E] transition-colors">We are hiring</Link>
              <Link href="#" className="hover:text-[#12D16E] transition-colors">Terms & Conditions</Link>
              <Link href="#" className="hover:text-[#12D16E] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#12D16E] transition-colors">Billing Policy</Link>
              <Link href="#" className="hover:text-[#12D16E] transition-colors">Cookie Policy</Link>
            </nav>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Support</h3>
            <nav className="flex flex-col gap-2 text-sm font-medium">
              <Link href="mailto:support@seafood.market" className="hover:text-[#12D16E] transition-colors">support@seafood.market</Link>
              <Link href="#" className="hover:text-[#12D16E] transition-colors">Safety tips</Link>
              <Link href="#" className="hover:text-[#12D16E] transition-colors">Contact Us</Link>
              <Link href="#" className="hover:text-[#12D16E] transition-colors">FAQ</Link>
            </nav>
          </div>

          {/* Our Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Our Resources</h3>
            <nav className="flex flex-col gap-2 text-sm font-medium">
              <Link href="#" className="hover:text-[#12D16E] transition-colors">Seafood Market on FB</Link>
              <Link href="#" className="hover:text-[#12D16E] transition-colors">Our Instagram</Link>
              <Link href="#" className="hover:text-[#12D16E] transition-colors">Our YouTube</Link>
              <Link href="#" className="hover:text-[#12D16E] transition-colors">Our Twitter</Link>
            </nav>
          </div>

          {/* Hot Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Hot Links</h3>
            <nav className="flex flex-col gap-2 text-sm font-medium">
              <Link href="#" className="hover:text-[#12D16E] transition-colors">Brand Directory</Link>
              <Link href="#" className="hover:text-[#12D16E] transition-colors">Merchant of the Month</Link>
              <Link href="#" className="hover:text-[#12D16E] transition-colors">Sell on Seafood Market</Link>
            </nav>
          </div>

          {/* Our Apps */}
          <div className="col-span-2 flex flex-col gap-6 md:col-span-4 lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Our Apps</h3>
            <div className="flex flex-row gap-4 lg:flex-col">
              {/* App Store */}
              <Link 
                href="#" 
                className="flex items-center gap-3 rounded-xl bg-black px-4 py-2 text-white border border-zinc-800 hover:border-[#12D16E] transition-all"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] leading-none uppercase">Download on the</span>
                  <span className="text-sm font-bold leading-tight">App Store</span>
                </div>
              </Link>
              
              {/* Google Play */}
              <Link 
                href="#" 
                className="flex items-center gap-3 rounded-xl bg-black px-4 py-2 text-white border border-zinc-800 hover:border-[#12D16E] transition-all"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,16.21C19.21,16.53 19.5,17.06 19.5,17.5C19.5,17.94 19.21,18.47 18.66,18.79L15.19,20.81L14.4,12.71L16.81,15.12M14.4,11.29L15.19,3.19L18.66,5.21C19.21,5.53 19.5,6.06 19.5,6.5C19.5,6.94 19.21,7.47 18.66,7.79L16.81,8.88L14.4,11.29M14.29,12L4.54,2.25C4.69,2.18 4.84,2.15 5,2.15C5.41,2.15 5.81,2.3 6.11,2.57L14.29,12M14.29,12L6.11,21.43C5.81,21.7 5.41,21.85 5,21.85C4.84,21.85 4.69,21.82 4.54,21.75L14.29,12Z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] leading-none uppercase">Get it on</span>
                  <span className="text-sm font-bold leading-tight">Google Play</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-zinc-800 pt-8 md:flex-row md:mt-16">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} Seafood Marketplace. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
