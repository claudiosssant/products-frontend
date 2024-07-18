import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import api from "../api";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import ContentEdit from "./conteudo-editar-produto";
import DeleteProduct from "./excluir-produto";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    api
      .get("produtos")
      .then((response) => {
        if (isMounted) {
          setProducts(response.data);
          setLoading(false);
        }
      })
      .catch(() => {
        alert("Produtos não encontrados!");
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="border rounded-lg flex items-center text-center shadow-lg bg-slate-50">
      <Table className="">
        <TableHeader className="bg-green-900 font-bold">
          <TableHead className="text-white text-center">ID</TableHead>
          <TableHead className="text-white text-center">Nome</TableHead>
          <TableHead className="text-white text-center">Preço</TableHead>
          <TableHead className="text-white text-center">Descrição</TableHead>
          <TableHead className="text-white text-center">
            Data de cadastro
          </TableHead>
          <TableHead className="text-white text-center">
            Editar produto
          </TableHead>
          <TableHead className="text-white text-center">
            Excluir produto
          </TableHead>
        </TableHeader>
        <TableBody>
          {products?.map((item, index) => (
            <TableRow key={String(item.id + index)}>
              <TableCell>{item.id}</TableCell>
              <TableCell className="text-xs w-[256px]">{item.name}</TableCell>
              <TableCell className="text-xs w-[128px]">{`R$ ${item.price}`}</TableCell>
              <TableCell className="text-[10px] w-[384px]">
                {item.description}
              </TableCell>
              <TableCell className="text-[10px] w-[256px]">
                {item.data}
              </TableCell>

              <TableCell>
                <Dialog>
                  <ContentEdit item={item} />
                  <DialogTrigger className="w-full" asChild>
                    <Pencil1Icon className="w-6 h-6 rounded-full m-auto cursor-pointer" />
                  </DialogTrigger>
                </Dialog>
              </TableCell>

              <TableCell className="">
                <Dialog className="">
                  <DeleteProduct item={item} />
                  <DialogTrigger className="" asChild>
                    <TrashIcon
                      color="white"
                      className="w-6 h-6 rounded-full m-auto cursor-pointer bg-red-600"
                    />
                  </DialogTrigger>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
