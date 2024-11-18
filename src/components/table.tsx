'use client';


import styled from '@emotion/styled';
import React from 'react';
import { COLORS } from '@/styles/common';
import Image from 'next/image';
import { MaterialReactTable, MRT_RowData, useMaterialReactTable } from 'material-react-table';

export type RowClickType<T> = {
  id: string;
  data: T;
};

export interface TableProps<T> {
  data: T;
  isLoading?: boolean;
  onRowClick?: (data: RowClickType<T>) => void;
  onRowMouseOver?: (row: any, args: any) => void;
  onRowMouseOut?: () => void;
  stickyHeight?: number | string;
  columns: any;
  muiTableHeadCellProps?: any;
  muiTablePaperProps?: any;
  muiTableBodyProps?: any;
  hiddenVisible?: { [key: string]: boolean };
  muiTableBodyCellProps?: any;
  setData?: (data: any) => void;
  enableRowOrdering?: boolean;
  isPointer?: boolean;
  columnPinning?: string[];
  emptyContainer?: any;
  muiTableHeadProps?: any;
  enableRowVirtualization?: boolean;
  enableColumnVirtualization?: boolean;
  rowVirtualizerOptions?: { overscan: number }; //optionally customize the row virtualizer
  columnVirtualizerOptions?: { overscan: number }; //optionally customize the column virtualizer
  muiTableContainerProps?: any;
}

const Table = <T extends MRT_RowData[]>({
  data,
  isLoading,
  onRowClick,
  onRowMouseOver,
  onRowMouseOut,
  stickyHeight,
  columns,
  muiTableHeadCellProps,
  muiTablePaperProps,
  muiTableBodyProps,
  hiddenVisible,
  muiTableBodyCellProps,
  enableRowOrdering,
  setData,
  isPointer = false,
  columnPinning,
  emptyContainer,
  muiTableHeadProps = {},
  enableRowVirtualization,
  enableColumnVirtualization,
  rowVirtualizerOptions,
  columnVirtualizerOptions,
  muiTableContainerProps,
  ...rest
}: TableProps<T>) => {
  const table = useMaterialReactTable({
    columns,
    data,
    enableTopToolbar: false,
    enableBottomToolbar: false,
    enablePagination: false,
    enableColumnActions: false,
    enableSorting: false,
    enableColumnResizing: false,
    enableHiding: true,
    enableColumnPinning: true,
    enableRowOrdering: enableRowOrdering,
    muiTableContainerProps: muiTableContainerProps,
    initialState: {
      columnVisibility: hiddenVisible,
      columnPinning: {
        left: columnPinning,
      },
    },

    displayColumnDefOptions: {
      'mrt-row-drag': {
        size: 50,
        header: '',
      },
    },
    getRowId: (row) => row.id,
    muiRowDragHandleProps: ({ table }) => ({
      onDragEnd: () => {
        const { draggingRow, hoveredRow } = table.getState();
        if (hoveredRow && draggingRow) {
          data.splice(hoveredRow.index as number, 0, data.splice(draggingRow.index, 1)[0]);
          setData && setData([...data] as T);
        }
      },
    }),

    renderEmptyRowsFallback() {
      const height = muiTableContainerProps?.height || muiTableContainerProps?.sx.maxHeight;

      return (
        <EmptyRenderContainer style={{ height: `calc(${height} - 52px)` }}>
          {isLoading ? (
            <LoadingContainer>
              <LoadingBar />
            </LoadingContainer>
          ) : emptyContainer ? (
            emptyContainer
          ) : (
            <div className="empty-image-wrapper">
              <Image
                src="https://image.thetak.net/asset/product/images/emotion_empty_data_sad_main.svg"
                width={173}
                height={151}
                alt="search"
              />
              <span>검색된 항목이 없습니다.</span>
            </div>
          )}
        </EmptyRenderContainer>
      );
    },
    muiTableBodyRowProps: ({ row }, ...args) => ({
      onClick: (e) => {},
      onMouseOver: (...args) => {
        onRowMouseOver?.(row, args);
      },
      onMouseOut: () => {
        onRowMouseOut?.();
      },
    }),

    muiTableProps: {
      sx: {
        '.MuiTableRow-root': { boxShadow: 'none' },
        '.MuiTableCell-root': { padding: '0' },
      },
    },
    muiTableHeadProps: {
      sx: {
        '.Mui-TableHeadCell-Content-Labels': {
          width: '100%',
        },
        '.Mui-TableHeadCell-Content-Wrapper': {
          width: '100%',
        },

        position: 'sticky',
        top: stickyHeight,
        zIndex: '2',
        opacity: '1',
        height: 40,
        ...muiTableHeadProps,
      },
    },
    muiTableHeadCellProps: {
      align: 'center',
      sx: {
        backgroundColor: COLORS.mainColor.main1,
        padding: 0,
        paddingBottom: 0,
        verticalAlign: 'center',
        paddingTop: 0,
        align: 'center',
        borderBottom: `1px solid ${COLORS.mainColor.main3}`,
        color: '#101828',
        fontWeight: 700,
        ':last-child': { borderRight: 'none' },
        ...muiTableHeadCellProps,
      },
    },
    muiTableBodyCellProps: (args) => {
      const style = {
        backgroundColor: '',
        borderTop: '',
        input: {
          color: '',
        },
      };
      if (args.row.original?.verifyResult === 2 || args.row.original?.verifyResult === 1) {
        style['backgroundColor'] = '#FEF0C7 !important';
        style['borderTop'] = '#F79009 !important';
      }
      return {
        align: 'center',
        onClick: () => {
          onRowClick &&
            onRowClick?.({
              id: args.column.id,
              data: args.row.original as T,
            });
        },
        sx: {
          minHeight: 40,
          borderTop: `1px solid #F3F5F6`,
          borderRight: `1px solid #F3F5F6`,
          padding: '4px 0px',
          alignItems: 'center',
          color: '#1D1B20',
          fontSize: '14px',
          fontWeight: '400',
          ':last-child': { borderRight: 'none' },

          ...style,
          ...muiTableBodyCellProps,
        },
      };
    },

    muiTableBodyProps: (args) => {
      return {
        sx: {
          'tr:hover': {
            cursor: isPointer ? 'pointer !important' : 'auto',
            td: {
              backgroundColor: COLORS.mainColor.main1,
              borderColor: '#ffffff',
            },
          },

          ...muiTableBodyProps,
        },
      };
    },
    muiTablePaperProps: muiTablePaperProps || {
      sx: { border: `1px solid #F3F5F6`, borderRadius: '0px', boxShadow: 'none' },
    },
    layoutMode: 'semantic',
    enableRowVirtualization: enableRowVirtualization,
    enableColumnVirtualization: enableColumnVirtualization,
    rowVirtualizerOptions: rowVirtualizerOptions, //optionally customize the row virtualizer
    columnVirtualizerOptions: columnVirtualizerOptions, //optionally customize the column virtualizer
    editDisplayMode: 'table',
    ...rest,
    // enableEditing: true,
  });

  return <MaterialReactTable table={table} />;
};

export default Table;

const EmptyRenderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
  font-size: 20px;
  font-weight: 400;

  .empty-image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    color: ${COLORS.grayScale.gray2};
    font-size: 24px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 48px;
`;

const LoadingBar = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #572a9b;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;

  @keyframes animloader {
    0% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
    25% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 2px;
    }
    50% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 2px, -38px 0 0 -2px;
    }
    75% {
      box-shadow: 14px 0 0 2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
    100% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
  }
`;

export function HeaderSorting({
  field,
  onSorting,
  sortList,
  children,
}: {
  sortList: {
    ascYn: boolean;
    columnName: string;
  }[];
  field: string;
  onSorting: (value: number, field: string) => void;
  children: any;
}) {
  const fieldSortState = sortList?.find((item) => item.columnName === field);

  const handleClickSort = () => {
    if (fieldSortState?.ascYn === undefined) {
      onSorting(2, field);
    }
    if (field === fieldSortState?.columnName && fieldSortState?.ascYn === true) {
      onSorting(3, field);
    }
    if (field === fieldSortState?.columnName && fieldSortState?.ascYn === false) {
      onSorting(1, field);
    }
  };

  return (
    <div onClick={handleClickSort} style={{ display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'center' }}>
      {children}
      {fieldSortState?.ascYn === undefined && <Image src={'/images/icon/sort/sort_default.svg'} alt="default" width={13} height={13} />}
      {field === fieldSortState?.columnName && fieldSortState?.ascYn === true && (
        <Image src={'/images/icon/sort/sort_up.svg'} alt="up" width={13} height={13} />
      )}
      {field === fieldSortState?.columnName && fieldSortState?.ascYn === false && (
        <Image src={'/images/icon/sort/sort_down.svg'} alt="down" width={13} height={13} />
      )}
    </div>
  );
}
