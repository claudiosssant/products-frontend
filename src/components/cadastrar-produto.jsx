import api from "../api";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function handleCreateProduct() {
    if (name === "" || price === "" || description === "") {
      return;
    }
    await api
      .post("produtos", { name, price, description })
      .then((response) => {
        if (response.status == 200) {
          alert(response.data.message);
        } else {
          alert("Novo produto não foi cadastrado!");
        }
      })
      .catch(() => {
        alert("O Produto não existe!");
      });
  }

  return (
    <div>
      <Dialog>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cadastro de produto</DialogTitle>
            <form className="space-y-6">
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <input
                  placeholder="Nome do produto"
                  required="true"
                  className="col-span-3 text-sm p-3"
                  maxLength={50}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                ></input>
              </div>
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <input
                  placeholder="Preço do produto"
                  required="true"
                  className="col-span-3 text-sm p-3"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  id="price"
                ></input>
              </div>
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <input
                  placeholder="Descrição do produto"
                  required="true"
                  className="col-span-3 text-sm p-3"
                  maxLength={400}
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
                <Button onClick={handleCreateProduct} type="submit">
                  Cadastrar
                </Button>
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
