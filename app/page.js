export default function PineStrawMulchWebsite() {
  const services = [
    {
      title: "Pine Straw Installation",
      description:
        "Fresh pine straw delivery and installation for flower beds, trees, walkways, and full yard refreshes.",
    },
    {
      title: "Mulch Installation",
      description:
        "Professional mulch spreading for a clean, polished look that helps retain moisture and reduce weeds.",
    },
    {
      title: "Bed Cleanup & Refresh",
      description:
        "We remove old debris, edge beds, and prepare your landscape for a neat, finished appearance.",
    },
  ];

  const benefits = [
    "Clean, professional installation",
    "Fast quotes and dependable scheduling",
    "Great for homes, rentals, and businesses",
    "Affordable curb appeal upgrade",
  ];

  const gallery = [
    "Front yard bed refresh",
    "Tree ring pine straw install",
    "Mulch around shrubs and walkways",
    "Full property landscape cleanup",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-amber-200 bg-amber-100 px-4 py-1 text-sm font-medium text-amber-900">
              Facundo's Pinestraw & Mulch Solutions
            </div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Facundo's Pinestraw & Mulch Solutions — making your property look clean, fresh, and professionally finished.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              We install pine straw and mulch for homeowners, rental properties, and small businesses. Whether you need a quick refresh or a full landscape bed cleanup, we help boost curb appeal without the hassle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
              >
                Request a Free Quote
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
              >
                View Services
              </a>
              <a
                href="tel:+17708782154"
                className="rounded-2xl border border-amber-300 bg-amber-100 px-6 py-3 text-sm font-semibold text-amber-900 transition hover:bg-amber-200"
              >
                📞 Call Now: (770) 878-2154
              </a>
              <a
                href="sms:+17708782154"
                className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
              >
                💬 Text for a Free Quote
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 text-sm text-stone-700 shadow-sm"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-lg">
              <div className="h-56 rounded-2xl bg-[linear-gradient(135deg,#c08a43,#8a5a2b)]" />
              <h3 className="mt-4 text-xl font-semibold">Pine Straw</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                A natural, warm look that helps protect soil and keeps beds tidy.
              </p>
            </div>
            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-lg sm:mt-10">
              <div className="h-56 rounded-2xl bg-[linear-gradient(135deg,#6b4f2d,#3d2c1a)]" />
              <h3 className="mt-4 text-xl font-semibold">Mulch</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                A bold, polished finish for landscape beds, shrubs, and pathways.
              </p>

