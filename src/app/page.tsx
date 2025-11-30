import { Header } from "@/components/layout/header"

export const Page = async ()  => {
  return (
    <div>
      <Header/>
      <main className="container mx-auto mb-10">
        Página inicial
      </main>
    </div>
  )
}

export default Page;