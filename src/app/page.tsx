import { Header } from "@/components/layout/header"
import { api } from "../lib/axios";
import { PizzaList } from "@/components/home/pizzas-list";

export const Page = async ()  => {
  const pizzaReq = await api.get('/pizzas')
  const pizzas = pizzaReq.data.pizzas ?? [];
  return (
    <div>
      <Header/>
      <main className="container mx-auto mb-10">
        <PizzaList pizzas={pizzas}/>
      </main>
    </div>
  )
}

export default Page;