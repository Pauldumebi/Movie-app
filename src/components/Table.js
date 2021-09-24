import { forwardRef } from "react";

import { TableCell, TableFooter, TableRow } from "@material-ui/core";
import MaterialTable, { MTableBody } from "material-table";
//Material UI table 
import { AddBox, ArrowDownward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, Edit, FilterList, FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumn } from "@material-ui/icons";

const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };


const Table = ({characterDetails, spinner}) => {
    return (
        <div>
            <MaterialTable
                icons={tableIcons}
                isLoading={spinner}
                columns={[
                { title: "Name", field: "name" },
                { title: "Gender",field: "gender",
                    lookup: { "male": "M", "female": "F", "n/a": "N/A" }
                },
                { title: "Height", field: "height"}
                ]}
                data={characterDetails}
                title="Star wars characters"
                components={{
                Body: (props) => (
                    <>
                    <MTableBody {...props} />
                    <TableFooter>
                        <TableRow>
                        <TableCell colSpan={2}><h5 className="font-weight-bold">Total: {characterDetails?.length}</h5></TableCell>
                        <TableCell colSpan={2}><h5 className="font-weight-bold">Total: {characterDetails?.reduce(function(prev, current) {return prev + +current.height }, 0)}</h5></TableCell>
                        </TableRow>
                    </TableFooter>
                    </>
                )
                }}
            />
        </div>
    )
}

export default Table