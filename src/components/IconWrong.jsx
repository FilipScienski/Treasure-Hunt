import x from '/x.svg'
import { forwardRef } from 'react';

const IconWrong = forwardRef(function IconWrong(props, ref)
{
    return(
        <img ref={ref} src={x} alt="wrong_icon" className='w-full h-full invert' />
    );
});

export default IconWrong;