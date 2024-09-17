export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-screen flex items-center justify-center relative bg-gradient-to-br from-background-light/50 to-background-dark/50">
      {children}
    </section>
  )
}
