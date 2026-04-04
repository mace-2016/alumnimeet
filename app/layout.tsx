              />
              <span className="absolute -top-1 -right-4 bg-slate-700 text-white text-[7px] font-bold px-1 py-[1px] rounded shadow-sm uppercase tracking-wider border border-slate-600/50">
                NEW
              </span>
            </div>
            <span
              className={`text-[10px] transition-colors ${
                isContests ? "text-[#1f295a] font-bold" : "text-slate-500 font-medium"
              }`}
            >
              Contests
            </span>
          </Link>

          <Link href="/plan" className="relative flex flex-col items-center justify-center w-full h-full group">
            <div className="mb-1">
              <Map
                className={`w-[24px] h-[24px] transition-colors ${
                  isPlan ? "stroke-amber-500 fill-amber-400/20" : "stroke-slate-400 fill-slate-50"
                }`}
                strokeWidth={1.5}
              />
            </div>
            <span
              className={`text-[10px] transition-colors ${
                isPlan ? "text-[#1f295a] font-bold" : "text-slate-500 font-medium"
              }`}
            >
              Plan
            </span>
          </Link>

          <Link href="/gallery" className="relative flex flex-col items-center justify-center w-full h-full group">
            <div className="mb-1">
              <ImageIcon
                className={`w-[24px] h-[24px] transition-colors ${
                  isGallery ? "stroke-amber-500 fill-amber-400/20" : "stroke-slate-400 fill-slate-50"
                }`}
                strokeWidth={1.5}
              />
            </div>
            <span
              className={`text-[10px] transition-colors ${
                isGallery ? "text-[#1f295a] font-bold" : "text-slate-500 font-medium"
              }`}
            >
              Gallery
            </span>
          </Link>
        </nav>
      </body>
    </html>
  );
}
