import { Pencil1Icon} from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const EditProduct = () => {
  return (
    <div>
      <Dialog>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar produto</DialogTitle>
            <form className="space-y-6">
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <input
                  placeholder="Novo ID do produto"
                  className="col-span-3 text-sm p-3"
                  id="id"
                ></input>
              </div>
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <input
                  placeholder="Novo nome do produto"
                  className="col-span-3 text-sm p-3"
                  id="name"
                ></input>
              </div>
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <input
                  placeholder="Novo preço do produto"
                  className="col-span-3 text-sm p-3"
                  id="price"
                ></input>
              </div>
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <input
                  placeholder="Nova descrição do produto"
                  className="col-span-3 text-sm p-3"
                  id="description"
                ></input>
              </div>
              <DialogFooter>
                <Button type="button" variant="destructive">
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogHeader>
        </DialogContent>
        <DialogTrigger asChild>
          <Button className="bg-green-900">
            <Pencil1Icon className="w-4 h-4 mr-2" />
            Editar produto
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  );
};

export default EditProduct;