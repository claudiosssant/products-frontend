import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const ProductsTable = () => {
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
          <TableRow>
            <TableCell>4572358</TableCell>
            <TableCell>Produto 1</TableCell>
            <TableCell>R$150</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>15/07/2024</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
