import React, { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';

export type TToolbar = {
  children?: ReactNode;
};

export const ToolbarList: React.FC<TToolbar> = ({ children }) => {
  const theme = useTheme();

  return (
    <GridToolbarContainer
      sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '5px 10px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <GridToolbarColumnsButton sx={{ color: theme.palette.primary.main }} />
        <GridToolbarDensitySelector sx={{ color: theme.palette.primary.main }} />
        <Box>{children}</Box>
      </div>
      <div>
        <GridToolbarQuickFilter />
      </div>
    </GridToolbarContainer>
  );
};