import { MRT_RowData } from 'material-react-table';
import styled from '@emotion/styled';
import { COLORS } from '@/styles/common';
import React, { useEffect, useRef } from 'react';
import { format } from 'date-fns';
import Select, { SELECT_PROPS, SelectOptionType } from './select';
import PaginationComp, { PAGINATION_PROPS } from './pagination';
import { TABLE_SELECT_OPTION } from '@/static/static';
import { TooltipBlack } from './tooltip';
import Table, { TableProps } from './table';

interface ListTableProps {
  tableOption: TableProps<MRT_RowData[]>;
  total?: number;
  headerLeftContents?: React.ReactNode;
  headerRightContents?: React.ReactNode;
  leftContents?: React.ReactNode;
  rightContents?: React.ReactNode;
  perPage?: number;
  paginationOption?: PAGINATION_PROPS;
  hide?: boolean;
  hideTableFunction?: boolean;
  hideSize?: boolean;
  hideHeader?: boolean;
  height?: number;
  hiddenVisible?: { [key: string]: boolean };
  selectOption?: Omit<SELECT_PROPS, 'option'> & { option?: SelectOptionType[] };
}

const ListTable = ({
  tableOption,
  paginationOption,
  total,
  headerLeftContents,
  headerRightContents,
  leftContents,
  rightContents,
  perPage,
  hide = false,
  hideTableFunction = false,
  hideSize = false,
  hideHeader = false,
  height,
  hiddenVisible,
  selectOption,
}: ListTableProps) => {
  const tableRef = useRef(null);

  const handleScrollToTop = () => {
    const scrollContainer = tableRef.current?.querySelector('.MuiTableContainer-root');

    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  };

  useEffect(() => {
    handleScrollToTop();
  }, [paginationOption?.pageData?.page, perPage]);

  const customColumns = tableOption?.columns.map((item: any) => {
    if (item.accessorKey === 'createDateTime' || item.accessorKey === 'modifyDateTime') {
      let type = item.accessorKey === 'createDateTime' ? 'createUser' : 'modifyUser';
      return {
        ...item,
        Cell: (params: any) => {
          return (
            <TooltipBlack type="black" arrow placement="bottom" title={<div>{params.row.original[type]}</div>}>
              {params.row.original[item.accessorKey] ? (
                <div>{format(new Date(params.row.original[item.accessorKey]), 'yyyy-MM-dd HH:mm:ss')}</div>
              ) : (
                <div>-</div>
              )}
            </TooltipBlack>
          );
        },
      };
    }
    if ('Cell' in item === true) return item;
    return {
      ...item,
      Cell: (params: any) => {
        if (
          params.row.original[item.accessorKey] === null ||
          params.row.original[item.accessorKey] === undefined ||
          params.row.original[item.accessorKey] === ''
        ) {
          return '-';
        }

        return params.row.original[item.accessorKey];
      },
    };
  });

  return (
    <div style={{ height: '100%' }} ref={tableRef}>
      {!hideHeader ? (
        <TableHeader>
          <div className="header">
            <div className="leftContents">
              {total >= 0 && (
                <span className="total">
                  검색 결과: 총 <b>{total}</b>건
                </span>
              )}
              {headerLeftContents}
            </div>
            {hide || hideSize ? (
              <></>
            ) : (
              <div className="rightContents">
                {headerRightContents}
                <Select size="tiny" option={TABLE_SELECT_OPTION} name="perPage" {...selectOption} />
              </div>
            )}
          </div>

          {hide || hideTableFunction ? (
            <></>
          ) : (
            <div className="tableFunction">
              <div className="leftContents">{leftContents}</div>
              <div className="rightContents">{rightContents}</div>
            </div>
          )}
        </TableHeader>
      ) : (
        <></>
      )}

      <Container>
        <Table
          {...tableOption}
          hiddenVisible={hiddenVisible}
          columns={customColumns}
          muiTableBodyCellProps={{ height: 40 }}
          muiTableContainerProps={{ sx: { height: height ? height : 'calc(100vh - 345px)' } }}
          muiTableBodyProps={{ height: height ? height - 40 : !tableOption?.data?.length ? 'calc(100vh - 305px)' : 40 }}
          stickyHeight={0}
        />
      </Container>

      {hide ? <></> : <PaginationComp {...paginationOption} />}
    </div>
  );
};

export default React.memo(ListTable);

const Container = styled.div`
  width: 100%;
  height: calc(100% - 60px - 48px - 40px);
`;

export const TableHeader = styled.div`
  .tableFunction {
    background: ${COLORS.grayScale.gray4};
    height: 48px;
    padding: 0px 10px;
    align-items: center;
  }
  .header {
    margin-bottom: 8px;
  }
  .header,
  .tableFunction {
    display: flex;
    justify-content: space-between;

    .leftContents,
    .rightContents {
      display: flex;
      gap: 4px;
      align-items: flex-end;
    }

    .total {
      color: ${COLORS.grayScale.gray2};
      font-size: 12px;
      font-weight: 700;

      b {
        color: ${COLORS.grayScale.black};
      }
    }
  }
`;
