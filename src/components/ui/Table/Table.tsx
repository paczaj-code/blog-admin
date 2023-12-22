import React, { useEffect, useState } from "react";
import { Select, Selection, SelectItem, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue, Input } from "@nextui-org/react";
// import {users} from "./data";
import { useSearchParams } from "react-router-dom";
import data2 from '../../../../db.json'
import { Icon2fa, IconSearch } from "@tabler/icons-react";

export default function App() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = useState<Selection>(new Set(['25']));
    const [search, setSearch] = useState('')
    // console.log([...rowsPerPage][0]);

    useEffect(() => {
 
            
       const filter = search.length > 2 ? search : 0
        setSearchParams({ page: page.toString(), rowsPerPage: [...rowsPerPage][0].toString(),
            filter: filter.toString()
        })
 
        
    }, [page, rowsPerPage, search])

    console.log(searchParams.values());

    const pages = Math.ceil(data2.terminology.length / +[...rowsPerPage][0]);



    const items = React.useMemo(() => {
        const start = (page - 1) * +[...rowsPerPage][0];
        const end = start + +[...rowsPerPage][0];



        return data2.terminology.slice(start, end);
    }, [page, data2.tags]);



    return (
        <>
        <div className="grid grid-cols-4 gap-5  my-4">
            <div>
            <Input
            size="sm"
                isClearable
                onValueChange={setSearch}
                key="search"
                type="text"
                // label="Szukaj wg nazwy"
                placeholder="Szukaj wg nazwy"
                labelPlacement="inside"
                //   description="aaa"
                value={search}
                variant="faded"
                color="default"
                startContent={
                    <IconSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
            />
            </div>
            <div className="w-40">
            <Select labelPlacement="inside" 
            label="ilośc wierszy" 
            selectorIcon={<Icon2fa />}
            disallowEmptySelection
            size="sm"
           classNames={{
            listboxWrapper: 'bg-gray-900 rounded-lg',
            listbox: 'bg-sky-800/30 [&>li:hover]:text-red-300 ',
            trigger:'data-[hover="true"]:bg-red-400'
            
           

           }}
                defaultSelectedKeys={rowsPerPage}
                variant="faded"
                color="default"
                onSelectionChange={setRowsPerPage}>
                <SelectItem key="5"  selectedIcon={<Icon2fa />} classNames={{base:'text-blue-900 data-[hover="true"]:bg-sky-600 data-[selected="true"]:bg-sky-600'}}>5</SelectItem>
                <SelectItem key="10">10</SelectItem>
                <SelectItem key="25">25</SelectItem>
                <SelectItem key="50">50</SelectItem>
            </Select>
            </div>
            </div>
            <Table
                // isStriped
                selectionMode="single"
                aria-label="Example table with client side pagination"
                bottomContent={
                <div className="flex w-full justify-around border-t-2 border-gray-600/40 ">
                        <Pagination
                            isDisabled={pages<=1}
                            showControls
                            showShadow
                            color="primary"
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                            className="mt-2 "
                        />

                    </div>
                }
                classNames={{
                    wrapper: "min-h-[222px]",
                }}
            >
                <TableHeader>
                    <TableColumn key="id">Id</TableColumn>
                    <TableColumn key="name">Nazwa</TableColumn>
                    <TableColumn key="slug">Slug</TableColumn>
                </TableHeader>
                <TableBody items={items} >
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => {return (
                            
                            <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                            
                            )}}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );
}
