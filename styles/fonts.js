import {Big_Shoulders_Display} from '@next/font/google'
import {Source_Serif_Pro} from '@next/font/google'
import  Avenir  from '@next/font/local'

export const BigShouldersDisplay = Big_Shoulders_Display({
    weight:['300', '600'],
    style:['normal'],
    subsets: ['latin'],

})
export const SourceSerifPro = Source_Serif_Pro({
    weight:['300', '400', '600', '700', '900'],
    style:['normal', 'italic'],
    subsets: ['latin'],
})

export const avenir = Avenir ({
    src:[
        {
            path: './fonts/Avenir/AvenirLTStd-Black.otf',
        },
        {
            path: './fonts/Avenir/AvenirLTStd-Book.otf',
        },
        {
            path: './fonts/Avenir/AvenirLTStd-Roman.otf',
        },
    ]
  })