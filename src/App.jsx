import NewProduct from "./components/cadastrar-produto"
import EditProduct from "./components/editar-produto"
import DeleteProduct from "./components/excluir-produto"
import ProductsTable from "./components/tabela-produtos"


function App() {
  
  return (
    <main className="bg-green-50 h-screen">
      <div className="p-6 max-w-4xl mx-auto space-y-5">
        <h1 className="text-3xl font-bold text-center">
          Meus produtos 🥊
        </h1>
        <ProductsTable />
        <div className="flex justify-between">
          <NewProduct />
          <EditProduct />
          <DeleteProduct />
        </div>
      </div>
    </main>
  )
}

export default App
