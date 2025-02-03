import {
  BUTTON_TYPE_CLASSES,
  TextButton,
} from "../../../../../ui_kits/Buttons/TextButton/TextButton.component";
import { Table, TableWrapper } from "../../../../../ui_kits/Table/Table.styles";

export const OrdersTable = () => {
  return (
    <TableWrapper>
      <Table className="Heading u-h5" hasNoBorder>
        <thead className="Text--subdued">
          <tr>
            <th>Order</th>
            <th>Date</th>
            <th>Total</th>
            <th>Payment</th>
            <th>Shippment</th>
          </tr>
        </thead>
        <tbody className=" u-h6">
          {Array.from(Array(5).keys()).map((x) => (
            <tr>
              <td data-th="Order">
                <span className="Link Link--underline Text--highlight">
                  #NM2247508748
                </span>
              </td>
              <td data-th="Date">July 14, 2021</td>
              <td data-th="Total">Rs. 2,499</td>
              <td data-th="Payment">Pending</td>
              <td data-th="Shippment" className="Text--subdued">
                Cancelled
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};
