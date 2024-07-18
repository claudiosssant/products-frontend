import { useState } from "react";
import api from "../api";
import { Button } from "./ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const ContentEdit = ({ item }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function handleEdit() {
    if (name === "" || price === "" || description === "") {
      return;
    }
    await api
      .put(`produtos/${item.id}`, { name, price, description })
      .then((response) => {
        if (response.status == 200) {
          alert(response.data.message);
        } else {
          alert("deu errado!");
        }
      })
      .catch(() => {
        alert("o Produto não existe!");
      });
  }
  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar produto</DialogTitle>
          <form className="space-y-6">
            <div className="grid grid-cols-4 items-center text-right gap-3">
              <input
                placeholder={item.name}
                className="col-span-3 text-sm p-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
              ></input>
            </div>
            <div className="grid grid-cols-4 items-center text-right gap-3">
              <input
                placeholder={`R$ ${item.price}`}
                className="col-span-3 text-sm p-3"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="price"
              ></input>
            </div>
            <div className="grid grid-cols-4 items-center text-right gap-3">
              <input
                placeholder={item.description}
                className="col-span-3 text-sm p-3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
              ></input>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancelar
                </Button>
              </DialogClose>
              <Button
                onClick={handleEdit}
                className="bg-green-900"
                type="submit"
              >
                Salvar
              </Button>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </div>
  );
};

export default ContentEdit;
