export default function BlogLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <main className='flex flex-col pt-20 bg-white px-10 md:px-20 lg:px-40 xl:px-80 min-h-screen gap-10  dark:bg-gray-900 pb-10 ' >
        {children}
        </main>
      </section>
    )
  }