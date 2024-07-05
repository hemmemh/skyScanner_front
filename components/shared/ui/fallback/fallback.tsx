
import ErrorImage from '@/public/errorImage.svg'

import './fallback.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Fallback = () => {
    const router = useRouter()


    return (
        <div role='alert' className='fallback'>
            <ErrorImage className='fallback__img' />
            <h1 className='fallback__img'>Something went wrong</h1>
            <Link href={'/'} className='fallback__link'>
                Go to home page
            </Link>
        </div>
    )
}
