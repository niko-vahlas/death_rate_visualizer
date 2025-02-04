import { Vehicle } from '@/interfaces/vehicleModel';
import { Table, TableCell, TableRow } from '@chakra-ui/react';

export default function carsTable(vehicles: Vehicle[]) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Model</Table.ColumnHeader>
          <Table.ColumnHeader>Brand</Table.ColumnHeader>
          <Table.ColumnHeader>Death Rate</Table.ColumnHeader>
          <Table.ColumnHeader>Other Driver Death Rate</Table.ColumnHeader>
          <Table.ColumnHeader>Year</Table.ColumnHeader>
          <Table.ColumnHeader>Type</Table.ColumnHeader>
          <Table.ColumnHeader>Size</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {vehicles.map((vehicle) => (
          <TableRow key={vehicle.model}>
            <TableCell>{vehicle.model}</TableCell>
            <TableCell>{vehicle.brand}</TableCell>
            <TableCell>{String(vehicle.driverDeathRate)}</TableCell>
            <TableCell>{String(vehicle.otherDriverDeathRate)}</TableCell>
            <TableCell>{vehicle.modelYearSpan}</TableCell>
            <TableCell>{vehicle.type}</TableCell>
            <TableCell>{vehicle.size}</TableCell>
          </TableRow>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
