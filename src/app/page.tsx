export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100 p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-sm border-2 border-amber-500/80 overflow-hidden">
        <div className="flex items-stretch">
          {/* Left: QR placeholder */}
          <div className="w-1/3 p-6 flex items-center justify-center bg-neutral-50">
            <img src="/qr.svg" alt="QR code" className="w-44 h-44 rounded-md" />
          </div>

          {/* Divider (perforation style) */}
          <div className="w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent relative">
            <div className="absolute -left-2 -top-3 size-6 bg-orange-100 rounded-full border border-neutral-200"></div>
            <div className="absolute -left-2 -bottom-3 size-6 bg-orange-100 rounded-full border border-neutral-200"></div>
          </div>

          {/* Right: Ticket info */}
          <div className="flex-1 p-6 sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-neutral-500">Mumbai, India</p>
                <p className="text-5xl font-semibold tracking-tight text-neutral-800">BOM</p>
                <p className="mt-2 text-xs text-neutral-500">Wed, July 27th • 1:00 AM</p>
              </div>
              <div className="flex-1 mx-4 pt-6 hidden sm:block">
                <div className="h-0.5 bg-amber-300/80 relative">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-amber-600">✈︎</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-neutral-500">Amsterdam, Netherlands</p>
                <p className="text-5xl font-semibold tracking-tight text-neutral-800">AMS</p>
                <p className="mt-2 text-xs text-neutral-500">Thu, July 27th • 8:30 AM</p>
              </div>
            </div>

            {/* Meta rows */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-6 gap-4 text-sm">
              <div>
                <p className="text-neutral-400">Passenger</p>
                <p className="font-medium text-neutral-800">Nikita Sharma</p>
              </div>
              <div>
                <p className="text-neutral-400">Seat</p>
                <p className="font-medium text-neutral-800">4A</p>
              </div>
              <div>
                <p className="text-neutral-400">Terminal</p>
                <p className="font-medium text-neutral-800">D</p>
              </div>
              <div>
                <p className="text-neutral-400">Gate</p>
                <p className="font-medium text-neutral-800">32</p>
              </div>
              <div className="col-span-2 sm:col-span-2">
                <p className="text-neutral-400">Boarding</p>
                <p className="font-medium text-neutral-800">12:40 PM</p>
              </div>
            </div>
          </div>
          {/* Right rail brand strip */}
          <div className="w-14 bg-neutral-900 text-white relative flex items-center justify-center">
            <div className="absolute -left-3 top-6 size-6 bg-orange-100 rounded-full border border-neutral-200"></div>
            <div className="absolute -left-3 bottom-6 size-6 bg-orange-100 rounded-full border border-neutral-200"></div>
            <div className="text-[10px] tracking-widest -rotate-90 whitespace-nowrap">BOARDING PASS • JET AIRWAYS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
