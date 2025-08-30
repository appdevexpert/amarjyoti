export function Footer() {
  return (
    <footer className="border-t bg-zinc-950 text-zinc-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-lg text-white">Shri Om Plywood Pvt. Ltd.</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Amarjyoti Ply — Made in India quality. We deliver what we promise: durable products, fair pricing, and
            on‑time service.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <span className="text-zinc-400">Factory:</span> 48 Km Stone, Village Sampla, Haryana - 124501
            </li>
            <li>
              <span className="text-zinc-400">Office:</span> Room 201, Vardhman Plaza Corner, Peeragarhi, Delhi - 110041
            </li>
            <li className="pt-1">
              <a href="tel:+919716192739" className="hover:text-white">
                +91 9716192739
              </a>{" "}
              •{" "}
              <a href="tel:+919716192738" className="hover:text-white">
                +91 9716192738
              </a>{" "}
              •{" "}
              <a href="tel:+919310079445" className="hover:text-white">
                +91 9310079445
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href="#products" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="#sustainability" className="hover:text-white">
                Manufacturing & Sustainability
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <p className="mx-auto max-w-6xl px-4 text-xs text-zinc-500">
          © {new Date().getFullYear()} Shri Om Plywood Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
