import { rewardData } from "../../../../mockData/rewardsData";
import { Accordian } from "../../../../ui_kits/Accordian/Accordian";
import { Table, TableWrapper } from "../../../../ui_kits/Table/Table.styles";
import "./Style.scss";

export const MyRewards = () => {
  return (
    <div className="Reward_Container">
      <div className="reward-points u-h6">
        <h4 className="Text--highlight"> Total RendererCash </h4>
        <h3 className="Heading">200</h3>
        <p className="points-info Text--subdued">
          You can pay upto 10% (may vary during the sale & promotion events) of
          your order value through RendererCash.
          <br /> Use them on the Payments page during checkout.
        </p>
      </div>
      <div className="reward-history">
        <TableWrapper>
          <Table className="Heading u-h6  " hasNoBorder>
            <thead className="Text--subdued">
              <tr>
                <th>DESCRIPTON</th>
                <th>Expiry</th>
                <th>CREDIT</th>
                <th>DEBIT</th>
                <th>BALANCE</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(Array(5).keys()).map((x) => (
                <tr>
                  <td data-th="DESCRIPTON">Promotion</td>
                  <td data-th="Expiry">25 Sep 2022</td>
                  <td data-th="CREDIT">+ 200</td>
                  <td data-th="DEBIT">0</td>
                  <td data-th="BALANCE">+ 150</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </div>
      <div className="reward-eligibility">
        {Object.entries(rewardData).map(([key, value]) => (
          <Accordian
            key={`faqItem-${key}`}
            title={key}
            child={
              <ul className="Rte Linklist u-h6 Heading Text--subdued">
                {value.map((ans: string, key: number) => (
                  <li className="Linklist__Item" key={`faqItemAns-${key}`}>
                    {ans}
                  </li>
                ))}
              </ul>
            }
          />
        ))}
      </div>
    </div>
  );
};
