import { PaletteColorOptions, ThemeOptions } from '@mui/material/styles';
import React from 'react';

declare module "@mui/material/styles" {
    interface Pallete {
        neutral?: ThemeOptions;
    }

    interface PalleteOptions {
        neutral?: PaletteColorOptions
    }
}