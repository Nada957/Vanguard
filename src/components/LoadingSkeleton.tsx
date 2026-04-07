export const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-[#111] to-black relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -left-1/2 w-full h-full bg-[#00ffff]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/2 w-full h-full bg-[#FF0000]/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        {/* Profile section skeleton */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          {/* Avatar skeleton */}
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-[#00ffff]/30 to-[#FF0000]/30 animate-pulse flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-black/50 animate-pulse"></div>
          </div>

          {/* Text skeletons */}
          <div className="flex-1 space-y-6">
            <div className="h-12 w-3/4 bg-gradient-to-r from-[#00ffff]/30 to-transparent rounded-lg animate-pulse"></div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-gradient-to-r from-white/10 to-transparent rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gradient-to-r from-white/10 to-transparent rounded animate-pulse"></div>
              <div className="h-4 w-4/6 bg-gradient-to-r from-white/10 to-transparent rounded animate-pulse"></div>
            </div>
            <div className="pt-4">
              <div className="h-12 w-40 bg-gradient-to-r from-[#00ffff]/40 to-[#00ffff]/20 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Skills section skeleton */}
        <div className="mb-20">
          <div className="h-8 w-40 bg-gradient-to-r from-[#00ffff]/30 to-transparent rounded-lg animate-pulse mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-black/40 border border-white/5 rounded-xl p-6 space-y-3">
                <div className="h-4 w-24 bg-gradient-to-r from-white/20 to-transparent rounded animate-pulse"></div>
                <div className="h-2 w-full bg-gradient-to-r from-[#00ffff]/20 to-transparent rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects section skeleton */}
        <div className="mb-20">
          <div className="h-8 w-40 bg-gradient-to-r from-[#00ffff]/30 to-transparent rounded-lg animate-pulse mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative group cursor-pointer">
                <div className="w-full h-64 bg-gradient-to-br from-[#00ffff]/20 to-[#FF0000]/20 rounded-2xl animate-pulse"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 to-transparent p-6 flex items-end">
                  <div className="h-6 w-3/4 bg-gradient-to-r from-white/30 to-transparent rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#00ffff] animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 rounded-full bg-[#00ffff] animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 rounded-full bg-[#00ffff] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="text-[10px] uppercase tracking-widest font-black text-white/40">Loading Portfolio...</span>
          </div>
        </div>
      </div>
    </div>
  );
};
