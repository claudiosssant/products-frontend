import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const NewProduct = () => {
  return (
    <div>
      <Dialog>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cadastro de produto</DialogTitle>
            <form className="space-y-6">
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <input
                  placeholder="ID do produto"
                  className="col-span-3 text-sm p-3"
                  id="id"
                ></input>
              </div>
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <input
                  placeholder="Nome do produto"
                  className="col-span-3 text-sm p-3"
                  id="name"
                ></input>
              </div>
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <input
                  placeholder="Preço do produto"
                  className="col-span-3 text-sm p-3"
                  id="price"
                ></input>
              </div>
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <input
                  placeholder="Descrição do produto"
                  className="col-span-3 text-sm p-3"
                  id="description"
                ></input>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
                <Button type="submit">Cadastrar</Button>
              </DialogFooter>
            </form>
          </DialogHeader>
        </DialogContent>
        <DialogTrigger asChild>
          <Button className="bg-green-900">
            <PlusCircledIcon className="w-4 h-4 mr-2" />
            Cadastrar produto
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  );
};

export default NewProduct;
