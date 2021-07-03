import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>injoon5's Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to one of {' '}
          <a className="text-blue-600" href="https://oij.vercel.app">
            injoon5's Website!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by clicking{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            the links!
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://oij.vercel.app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Website (WIP) &rarr;</h3>
            <p className="mt-4 text-xl">
              injoon5's WIP Website.
            </p>
          </a>

          <a
            href="https://ij5-web.vercel.app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">(OLD) Website &rarr;</h3>
            <p className="mt-4 text-xl">
              It is based on a template. I do not recommend going there. 
            </p>
          </a>

          <a
            href="https://haste-server.injoon5.repl.co"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Presonal Hastebin &rarr;</h3>
            <p className="mt-4 text-xl">
              injoon5's PERSONAL hastebin. 
            </p>
          </a>

          <a
            href="https://oijtae.kro.kr"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">The First Website I made &rarr;</h3>
            <p className="mt-4 text-xl">
              It's literally the title. (It's BAD!)
            </p>
          </a>

          <a
            href="https://file.injoon5.repl.co"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Presonal File Server &rarr;</h3>
            <p className="mt-4 text-xl">
              Don't Close Your Tab!~
            </p>
          </a>

          <a
            href="https://fastapi-dctxt2img.injoon5.repl.co/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Discord txt to img</h3>
            <p className="mt-4 text-xl">
              A tool to make a image with A line of text. 
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
