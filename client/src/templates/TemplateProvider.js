import { createContext } from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {CssBaseline} from '@mui/material'
import { blue,purple } from '@mui/material/colors';

const TemplateContext= createContext(null);

export const TemplateProvider = ({children}) => {
    const theme = createTheme({
        
        overrides: {
           
            padding: 0,
            '&:first-child': {
                paddingTop: 0
            }
    }
        
        
    
    
    })

    return (
       <TemplateContext.Provider>
           <ThemeProvider theme={theme}>
             <CssBaseline/>
              {children}
           </ThemeProvider>
       </TemplateContext.Provider>
    )

}