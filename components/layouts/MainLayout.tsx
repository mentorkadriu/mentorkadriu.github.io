export default function MainLayout({children}) {
  return (
      <div className="page">
        <div className="max-w-[800px] mx-auto px-4">
          {children}
        </div>
      </div>
  )
}
