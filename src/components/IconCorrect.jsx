import check from '/check.svg'
import { forwardRef } from 'react';

const IconCorrect = forwardRef(function IconCorrect(props, ref)
{
    return(
        <img ref={ref} src={check} alt="check_icon" className='w-full h-full invert' />
    );
});

export default IconCorrect