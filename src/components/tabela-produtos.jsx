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

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    api
      .get("produtos")
      .then((response) => {
        if (isMounted) {
          console.log(response);
          setProducts(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Fetch não concluido", error);
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
    <div className="border rounded-lg flex justify-evenly shadow-lg bg-slate-50">
      <Table>
        <TableHeader className="bg-green-900 font-bold">
          <TableHead className="text-white">ID</TableHead>
          <TableHead className="text-white">Nome</TableHead>
          <TableHead className="text-white">Preço</TableHead>
          <TableHead className="text-white">Descrição</TableHead>
          <TableHead className="text-white">Data de cadastro</TableHead>
        </TableHeader>
        <TableBody>
          {products?.map((item, index) => (
            <TableRow key={String(item.id + index)}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
