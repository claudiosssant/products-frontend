import api from "../api";
import { Button } from "./ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";

const DeleteProduct = ({ item }) => {
  async function handleDelete() {
    await api
      .delete(`produtos/${item.id}`)
      .then((response) => {
        if (response.status == 200) {
          alert(response.data.message);
        } else {
          alert("Não foi possível excluir o produto!");
        }
      })
      .catch(() => {
        alert("Erro ao excluir produto!");
      });
  }

  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Excluir produto</DialogTitle>
          <form className="space-y-6">
            <div className="">
              <Label>{`Você tem certeza que quer excluir o produto ${item.name}?`}</Label>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancelar
                </Button>
              </DialogClose>
              <Button
                onClick={handleDelete}
                type="submit"
                variant="destructive"
              >
                Deletar
              </Button>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </div>
  );
};

export default DeleteProduct;
