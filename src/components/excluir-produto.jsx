import { Pencil1Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const DeleteProduct = () => {
  return (
    <div>
      <Dialog>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Excluir produto</DialogTitle>
            <form className="space-y-6">
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <input
                  placeholder="ID do produto a ser excluído"
                  className="col-span-3 text-sm p-3"
                  id="id"
                ></input>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
                <Button type="submit" variant="destructive">
                  Deletar
                </Button>
              </DialogFooter>
            </form>
          </DialogHeader>
        </DialogContent>
        <DialogTrigger asChild>
          <Button className="bg-green-900">
            <Pencil1Icon className="w-4 h-4 mr-2" />
            Excluir produto
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  );
};

export default DeleteProduct;
