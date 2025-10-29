export function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-2xl mx-auto w-full">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-light">
            © {new Date().getFullYear()} Ringfence. All rights reserved.
          </p>
          <div className="flex gap-6 hidden">
            <a
              href="#"
              className="text-sm font-light hover:opacity-70 transition-opacity"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm font-light hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
