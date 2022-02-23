import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Box from '@mui/material/Box';
import './Pagination.css'
export default function Pagination() {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100,
//     maxColumns: 6,
//   });
  const columns = [
    {
      field: 'Store',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width:220,
      sortable: false,
      disableColumnMenu:true,
    },
    {
      field: 'Category',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width:220,
      sortable: false,
      disableColumnMenu:true,
    },
    {
        field: 'DateTime',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        width:220,
        sortable: false,
        disableColumnMenu:true,
      },
      {
        field: 'Amount',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        width:203,
        sortable: false,
        disableColumnMenu:true,
      },
      {
        field: 'Offer',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        width:220,
        sortable: false,
        disableColumnMenu:true,
      },
  ];

  const rows  = [
    {
        id : 1,
        Category : "food",
        Store : "MCD",
        DateTime : " 29th March, 21:00:00",
       Offer : "Buy 1 get 1 free",
       Amount : "100",
       VerticalAlignment:"Center",
    },
    {
        id:2,
        Category : "food",
        Store : "MCD",
        DateTime : " 29th March, 21:00:00",
       Offer : "Flat 50%",
       Amount : "100",
       VerticalAlignment:"Center",
  
    },
    {
        id:3,
         Category : "food",
        Store : "MCD",
       Offer: "Buy 1 get 1 free",
        DateTime : " 29th March, 21:00:00",
       Amount : "100",
       VerticalAlignment:"Center",
  
    },
    {
        id:4,
          Category : "food",
        Store : "MCD",
       Offer: "Buy 1 get 1 free",
        DateTime: " 29th March, 21:00:00",
       Amount : "100",
       VerticalAlignment:"Center",
  
    },
    {
        id:5,
          Category : "food",
        Store : "MCD",
       Offer: "Buy 1 get 1 free",
       DateTime: " 29th March, 21:00:00",
       Amount : "100",
       VerticalAlignment:"Center",
  
    },
    {
        id:6,
        Category : "food",
      Store : "MCD",
     Offer: "Buy 1 get 1 free",
      DateTime: " 29th March, 21:00:00",
     Amount : "100",
     VerticalAlignment:"Center",
  
  },
  {
    id:7,
      Category : "food",
    Store : "MCD",
   Offer: "Buy 1 get 1 free",
    DateTime: " 29th March, 21:00:00",
   Amount : "100",
   VerticalAlignment:"Center",
  
  },
  {
    id:8,
      Category : "food",
    Store : "MCD",
   Offer: "Buy 1 get 1 free",
    DateTime: " 29th March, 21:00:00",
   Amount : "100",
   VerticalAlignment:"Center",
  
  },
  {
    id:9,
     Category : "food",
    Store : "MCD",
   Offer: "Buy 1 get 1 free",
   DateTime: " 29th March, 21:00:00",
   Amount : "100",
   VerticalAlignment:"Center",
  
  },
  {
    id:10,
   Category : "food",
    Store : "MCD",
   Offer: "Buy 1 get 1 free",
   DateTime: " 29th March, 21:00:00",
   Amount : "100",
   VerticalAlignment:"Center",
  
  },
  {
    id:11,
      Category : "food",
    Store : "MCD",
   Offer: "Buy 1 get 1 free",
   DateTime: " 29th March, 21:00:00",
   Amount : "100",
   VerticalAlignment:"Center",
  
  },
  {
    id:12,
  Category : "food",
  Store : "MCD",
 Offer: "Buy 1 get 1 free",
  DateTime: " 29th March, 21:00:00",
 Amount : "100",
 VerticalAlignment:"Center",
  
  },
  ];
  const [page, setPage] = React.useState(0);

  return (
    <div className="content-1">
    <div style={{ height: 900, width: '100%' }}>
    <Box
      sx={{
        height:700,
        
        width: 1,
        '& .super-app-theme--header': {
          backgroundColor: 'rgba(86, 188, 240, 1)',
        },
      }}
    >
      <DataGrid sx={{ m: 2 }}  sx={{
    boxShadow: 12,
    border: 2,
    borderRadius:5,
    borderColor: 'primary.light',
    '& .MuiDataGrid-cell:hover': {
      color: 'primary.main',
    },
    
    
  }} 
  rows={rows} columns={columns}
        page={page}
        onPageChange={(newPage) => setPage(newPage)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        pagination
       
      />
      </Box>
    </div></div>
  );
}
