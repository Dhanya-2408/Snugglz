import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

interface IProps {
  isLarge?: boolean;
  hasNoBorder?: boolean;
}

export const Table = styled.table<IProps>`
  width: 100%;
  border-collapse: separate;
  white-space: nowrap;

  th,
  td {
    padding: 18px 10px;
    border-bottom: 1px solid #e7e7e7;
    text-align: left;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  th {
    font-weight: 500;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }

  td {
    ${({ isLarge }) => isLarge && `padding-top: 25px; padding-bottom: 25px;`};
  }

  // tbody tr:not(:last-child) td {
  //   ${({ hasNoBorder }) => hasNoBorder && `border-bottom: none;`};
  // }

  tbody tr td {
    ${({ hasNoBorder }) => hasNoBorder && `border-bottom: none;`};
  }

  @media screen and (min-width: 1240px) {
    white-space: normal;

    td {
      ${({ isLarge }) => isLarge && `padding-top: 35px; padding-bottom: 35px;`};
    }
  }

  @media (max-width: 767px) {
    thead {
      display: none;
    }

    tbody > tr {
      display: block;
      border-bottom: 1px solid #ccc;

      &:last-child {
        border-bottom: 0;
      }

      td[data-th]:before {
        padding-right: 10px;
        content: attr(data-th) ": ";
        display: inline-block;
        text-transform: capitalize;
        font-weight: 500;
        color: #939393;
      }
    }

    td {
      border-bottom: none;
      display: block;
      padding: 5px 0;
      &:first-child {
        padding-top: 20px;
      }

      &:last-child {
        padding: 15px 0 20px;
      }
    }
  }
`;
