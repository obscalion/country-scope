import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css';

function PaginationComponent ({ count, page, onPageChange }) {

    return (
        <div className="pagination-container">
            <Stack spacing={2}>
                <Pagination
                count={count}
                page={page}
                onChange={onPageChange}
                color="primary"
                variant="outlined"
                shape="rounded"
                showFirstButton
                showLastButton
                />
            </Stack>
        </div>
      );
}

export default PaginationComponent;